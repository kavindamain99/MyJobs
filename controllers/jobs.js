const getAllJobs = async (req, res) => {
  res.send("getJobs");
};

const getJobs = async (req, res) => {
  res.send("getJobs");
};

const createjob = async (req, res) => {
  await res.json(req.userLogged);
};

const updatejob = async (req, res) => {
  res.send("getJobs");
};

const deletejob = async (req, res) => {
  res.send("getJobs");
};

module.exports = {
  getAllJobs,
  getJobs,
  createjob,
  updatejob,
  deletejob,
};
