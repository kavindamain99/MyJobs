const User = require("../model/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  //check header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.send("Authentication invalid");
  } else {
    console.log(authHeader);
    next();
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    req.user = { userId: payload.userId };

    console.log(req.user);
    next();
  } catch (error) {
    res.send("Authentication invalid user");
  }
};

module.exports = auth;
