const sql = require("../models/db");
exports.getAllUser = (req, res) => {
    sql.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log("error: ", err);
            return res.status(400).send({ status: "failed", message: "error!" });
        }
        if (result.length) {
            console.log("users: ", result);
            return res.status(200).send({ status: "ok", result});
        }
        return res.status(200).send({ status: "ok", message: "No data!"});
    });

}
exports.getUserById = (req, res) => {
    const id = req.query.id
    console.log(id);
    sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return res.status(400).send({ status: "failed", message: "error!" });
        }
        if (result.length) {
            console.log("user: ", res[0]);
            return res.status(200).send({ status: "ok", result});
        }
        return res.status(200).send({ status: "ok", message: "User not founded!"});
    });
}
exports.createUser = (req, res) => {
    const dataUsers = {
        email : req.body.email,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        phonenumber : req.body.phonenumber
    }
    sql.query("INSERT INTO users SET ?", dataUsers, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return res.status(400).send({ status: "failed", message: "Create users failed!" });
        }
            console.log("created users: ", { id: result.insertId,  dataUsers});
            return res.status(200).send({ status: "ok", message: "Create users successfully!" });
    });
}
exports.editUser = (req, res) => {
    const dataUsers = {
        id: req.body.id,
        email : req.body.email,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        phonenumber : req.body.phonenumber,
    }
    sql.query("UPDATE users SET email = ?, firstname = ?, lastname = ?, phonenumber = ? WHERE id = ?",
    [dataUsers.email,dataUsers.firstname,dataUsers.lastname,dataUsers.phonenumber,dataUsers.id],(err, result) => {
          if (err) {
            console.log("error: ", err);
            return res.status(400).send({ status: "failed", message: "Update users failed!" });
          }
          if (result.affectedRows == 0) {
            console.log("User not founded!");
            return res.status(200).send({ status: "failed", message: "User not founded!"});
          }
            console.log("Update users: ", { dataUsers});
            return res.status(200).send({ status: "ok", message: "Update id users successfully!" });
        }
      );
}
exports.deleteUser = (req, res) => {
    const id = req.query.id;
    sql.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return res.status(400).send({ status: "failed", message: "Delete users failed!" });
        }
        if (result.affectedRows == 0) {
            console.log("User not founded!");
            return res.status(200).send({ status: "failed", message: "User id not founded!"});
        }
            console.log("Deleted users with id: ", id);
            return res.status(200).send({ status: "ok", message: "Delete users successfully!" });
      });
}
