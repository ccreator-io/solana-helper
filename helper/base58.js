const express = require("express");
const bs58 = require("bs58");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const router = express.Router();

// Configuración de CORS
router.use(
  cors({
    origin: "https://tu-dominio-permitido.com", // Cambia esto por el dominio permitido
    methods: ["GET", "POST"],
  })
);

// Configuración de rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limita cada IP a 100 solicitudes por ventana
  message: "Too many requests from this IP, please try again later.",
});

router.use(limiter);

// Validación de datos
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
