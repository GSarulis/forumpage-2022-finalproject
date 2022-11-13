const jwt = require("jsonwebtoken");

const { jwtSecret } = require("./dbconfig");

module.exports = {
  isLoggedIn: async (req, res, next) => {
    const token = req.header("x-auth-token");

    // If token not found, send error message
    if (!token) {
      res.status(401).json({
        errors: [
          {
            msg: "Token not found",
          },
        ],
      });
    }

    try {
      const user = await jwt.verify(token, jwtSecret);
      req.user = user.email;
      next();
    } catch (error) {
      res.status(403).json({ errors: [{ msg: "Invalid token" }] });
    }
  },
};
