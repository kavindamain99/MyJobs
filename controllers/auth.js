const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save({ ...req.body });
    const token = jwt.sign(
      { userId: user._id, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_LIFETIME,
      }
    );

    res.status(200).json({ user: { name: user.getName() }, token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send("please provide email and password");
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    res.send("invalid email");
  } else {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign(
        { userId: user._id, name: user.name },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_LIFETIME,
        }
      );

      res.status(200).json({
        user: { name: user.getName() },
        password: { password: user.password },
        token,
      });
    } else {
      res.send("Invalid Password");
    }
  }
};

module.exports = {
  register,
  login,
};
