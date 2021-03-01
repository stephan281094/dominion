import { getISOWeek, getISOWeekYear } from "date-fns";
import faunadb from "faunadb";
import { startTimes } from "../constants/youtube";

const keywords = Object.keys(startTimes);
const blockedKeywords = ["service-worker.js", "sw.js"];

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

/**
 * Get a record by a certain date "{year}:{week}".
 *
 * @param {String} date The current date
 * @returns Promise<Object | null>
 */
export async function getRecord(date) {
  try {
    return await client.query(
      q.Get(q.Match(q.Ref("indexes/traffic_by_date"), [date]))
    );
  } catch (err) {
    // TODO Check if error is a NotFound error.
    return null;
  }
}

/**
 * Get all records.
 *
 * @returns Promise<Object>
 */
export async function getAll() {
  try {
    const refs = await client.query(
      q.Paginate(q.Documents(q.Collection("traffic")))
    );
    return await client.query(refs.data.map((ref) => q.Get(ref)));
  } catch (err) {
    // TODO Check if error is a NotFound error.
    return null;
  }
}

/**
 * Create a new record based on a date and keyword.
 *
 * @param {String} date    The current date
 * @param {String} keyword The keyword to track
 * @returns Promise<Object>
 */
export async function createRecord(date, keyword) {
  const key = keywords.includes(keyword) ? keyword : "other";
  const data = { date, keywords: { [key]: 1 } };

  return client.query(q.Create(q.Ref("classes/traffic"), { data }));
}

/**
 * Update an existing record with new data.
 *
 * @param {String} record The existing record
 * @param {Object} data   The updated data
 * @returns Promise<Object>
 */
export async function updateRecord(record, data) {
  return client.query(q.Update(record.ref, { data }));
}

/**
 * Track what keywords are most commonly used, per week.
 *
 * @param {String} keyword The keyword to track
 * @returns void
 */
export async function trackKeyword(keyword) {
  // Filter out blocked keywords.
  if (blockedKeywords.includes(keyword)) {
    return;
  }

  const now = new Date();
  const date =
    getISOWeekYear(now) + "-" + String(getISOWeek(now)).padStart(2, "0");
  const record = await getRecord(date);

  // Update the record if it exists, create one otherwise.
  if (record) {
    const key = keywords.includes(keyword) ? keyword : "other";
    const hits = record.data.keywords[keyword] || 0;
    updateRecord(record, {
      ...record.data,
      keywords: { ...record.data.keywords, [key]: hits + 1 },
    });
  } else {
    createRecord(date, keyword);
  }
}
