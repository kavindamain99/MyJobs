const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");

const { applyJob } = require("../controllers/candidate");
const { uploadImage } = require("../controllers/candidateImageController");

router.post("/apply/:id", authenticate, applyJob);
router.post("/uploads", authenticate, uploadImage);

module.exports = router;
