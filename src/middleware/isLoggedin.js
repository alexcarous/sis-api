import jwt from "jsonwebtoken";
import { errorResponse } from "../helpers";

// eslint-disable-next-line
import { Users } from "../models";

const isLoggedin = async (req, res, next) => {
  if (!(req.headers && req.headers.authorization)) {
    return errorResponse(req, res, "Token is not provided", 401);
  }
  const token = req.headers.authorization;
  console.log("isLoggedin -> token", token);
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded.user;
    console.log("isLoggedin -> req.user", req.user);
    const user = await Users.scope("withSecretColumns").findOne({
      where: { username: req.user.username },
    });
    console.log("isLoggedin -> user", user);
    if (!user) {
      return errorResponse(req, res, "User is not found in system", 401);
    }
    const reqUser = { ...user.get() };
    reqUser.userId = user.id;
    req.user = reqUser;
    return next();
  } catch (error) {
    console.error("isLoggedin -> error", error);
    return errorResponse(
      req,
      res,
      "Incorrect token is provided, try re-login",
      401
    );
  }
};

export default isLoggedin;
