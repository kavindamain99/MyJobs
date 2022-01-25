const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");

const {
  getAllJobs,
  getJobs,
  createjob,
  updatejob,
  deletejob,
} = require("../controllers/jobs");

router.get("/getAlljobs", authenticate, getAllJobs);
router.get("/getJobs", getJobs);
router.post("/createjob", authenticate, createjob);

router.patch("/updatejob/:id", updatejob);
router.delete("/deletejob/:id", deletejob);

module.exports = router;
