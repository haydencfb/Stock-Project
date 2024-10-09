import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    const secretKey = process.env.JWT_SECRET_KEY || "";

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user; // No need for explicit type casting like in TypeScript
      return next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

export default authenticateToken;
