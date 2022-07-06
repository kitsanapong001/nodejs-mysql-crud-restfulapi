const authJwt = require("../middlewares/authJwt");
const verifyUser = require("../middlewares/verifyUser");
const controller = require("../controllers/users.controller");

module.exports = function (app) {
    // set header
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
    //get all
  app.get("/api/users/getAllUser", [authJwt.verifyToken], controller.getAllUser);
    //get by id
  app.get("/api/users/getUserById", [authJwt.verifyToken],controller.getUserById);
    //create user
  app.post("/api/users/createUser", [authJwt.verifyToken],[verifyUser.checkDuplicateEmail],controller.createUser);
    //delete user
  app.delete("/api/users/deleteUser", [authJwt.verifyToken],controller.deleteUser);
    //edit user
  app.put("/api/users/editUser", [authJwt.verifyToken],controller.editUser);
}