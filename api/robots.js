module.exports = (_req, res) => {
  res.setHeader("Content-Type", "text/plain");

  return res.status(200).send("User-agent: *\nDisallow: /");
};
