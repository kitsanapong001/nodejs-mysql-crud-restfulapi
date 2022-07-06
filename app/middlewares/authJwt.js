verifyToken = (req, res, next) => {
  let token = req.headers["token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  if(token == "123"){
    next();
  }else{
    return res.status(403).send({ message: "Token not found!" });
  }
};

const authJwt = {
  verifyToken,
};
module.exports = authJwt;
