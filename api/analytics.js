import { getAll } from "../services/analytics";

module.exports = async (_req, res) => {
  const records = await getAll();

  return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dmnn analytics</title>
      <style>
        html {
          font-family: monospace;
        }
      </style>
    </head>
    <body>
      <h1>Analytics</h1>
        ${records
          .map(
            (record) => `
          <h3>${record.data.date}</h3>
          <ul>
            ${Object.entries(record.data.keywords)
              .map(
                ([keyword, value]) => `
              <li><strong style="width: 3rem;">${keyword}:</strong> ${value}</li>
            `
              )
              .join("")}
          </ul>
        `
          )
          .join("")}
    </body>
    </html>
  `);
};
