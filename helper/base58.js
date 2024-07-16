const express = require("express");
const bs58 = require("bs58");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const router = express.Router();

router.use(
  cors({
    origin: process.env.CORS,
    methods: ["GET", "POST"],
  })
);

const windowMs = process.env.RATE_LIMIT_TIME
  ? parseInt(process.env.RATE_LIMIT_TIME) * 60 * 1000
  : 15 * 60 * 1000;

const max = process.env.RATE_LIMIT_API
  ? parseInt(process.env.RATE_LIMIT_API)
  : 100;

const limiter = rateLimit({
  windowMs: windowMs,
  max: max,
  message: "Too many requests from this IP, please try again later.",
});

router.use(limiter);

const validateData = (req, res, next) => {
  const data = req.method === "POST" ? req.body.data : req.query.data;
  if (!data) {
    return res.status(400).json({ error: "Data is required" });
  }
  req.data = data;
  next();
};

router.post("/encode", validateData, (req, res) => {
  try {
    const buffer = Buffer.from(req.data, "utf8");
    const encoded = bs58.encode(buffer);
    res.json({ encoded });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/encode", validateData, (req, res) => {
  try {
    const buffer = Buffer.from(req.data, "utf8");
    const encoded = bs58.encode(buffer);
    res.json({ encoded });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/decode", validateData, (req, res) => {
  try {
    const decoded = bs58.decode(req.data).toString("utf8");
    res.json({ decoded });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/decode", validateData, (req, res) => {
  try {
    const decoded = bs58.decode(req.data).toString("utf8");
    res.json({ decoded });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
