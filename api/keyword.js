import * as youtube from "../constants/youtube";
import { trackKeyword } from "../services/analytics";

module.exports = async (req, res) => {
  const keyword = req.query.keyword || "all";
  const start = youtube.startTimes[keyword] || 0;

  await trackKeyword(keyword.toLowerCase());

  res.status(301).redirect(youtube.url + (start ? "?t=" + start : ""));
};
