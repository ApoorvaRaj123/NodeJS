const shortid = require("shortid");
const URL = require("../models/url");

const handleUrlGeneration = async (req, res) => {
  const body = req.body;
  if (!body.url) res.status(400).json({ message: "Url is required" });

  const shortID = shortid();

  URL.create({
    shortid: shortID,
    redirectUrl: body.url,
    history: [],
  });

  return res.json({ id: shortID });
};

const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortid;
  const result = URL.findOne({ shortId });
  return res.json({
    totalClicks: result.history.length,
    analytics: result.history,
  });
};

module.exports = { handleUrlGeneration, handleGetAnalytics };
