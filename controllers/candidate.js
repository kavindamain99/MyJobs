const Candidate = require("../model/candidate");

const applyJob = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;

    req.body.jobBy = req.params.id;
    const application = await Candidate.create(req.body);
    res.send(application);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { applyJob };
