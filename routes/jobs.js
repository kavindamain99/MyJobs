const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  getJobs,
  createjob,
  updatejob,
  deletejob,
} = require("../controllers/jobs");

router.get("/getAlljobs", getAllJobs);
router.get("/getJobs", getJobs);
router.post("/createjob", createjob);
router.patch("/updatejob/:id", updatejob);
router.delete("/deletejob/:id", deletejob);

module.exports = router;
