const register = async (req, res) => {
  res.send("register user");
};

const login = async (req, res) => {
  res.send("registered login");
};

module.exports = {
  register,
  login,
};
