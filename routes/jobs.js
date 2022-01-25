const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");

const {
  getjobs,
  getjob,
  createjob,
  updatejob,
  deletejob,
} = require("../controllers/jobs");

router.get("/getjobs", authenticate, getjobs);
router.get("/getjob/:id", getjob);
router.post("/createjob", authenticate, createjob);

router.patch("/updatejob/:id", updatejob);
router.delete("/deletejob/:id", deletejob);

module.exports = router;
