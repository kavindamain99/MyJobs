const Job = require("../model/jobs");

const getjobs = async (req, res) => {
  try {
    const jobs = await Job.find({ createdBy: req.user.userId }).sort(
      "createdAt"
    );
    res.status(200).json({ jobs, count: jobs.length });
  } catch (error) {
    res.send(error);
  }
};

const getjob = async (req, res) => {
  try {
    const {
      user: { userId },
      params: { id: jobId },
    } = req;
    const job = await Job.findOne({ _id: jobId, createdBy: userId });
  } catch (error) {
    res.send(error);
  }
};

const createjob = async (req, res) => {
  console.log(req.user.userId);
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.send(job);
};

const updatejob = async (req, res) => {
  const jobID = req.params.id;
  try {
    const job = await Job.findOneAndUpdate({ _id: jobID }, req.body, {
      //return updated value and run mongoose validaters
      //we defined on model
      new: true,
      runValidators: true,
    });
    res.status(200).json(job);
  } catch (error) {
    res.send(error);
  }
};

const deletejob = async (req, res) => {
  const jobID = req.params.id;
  try {
    //also we can use findbyid
    const job = await Job.findOneAndDelete({ _id: jobID });
    if (!job) {
      res.status(404).json({ msg: "job not found" });
    } else {
      res.status(201).json({ job });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getjobs,
  getjob,
  createjob,
  updatejob,
  deletejob,
};
