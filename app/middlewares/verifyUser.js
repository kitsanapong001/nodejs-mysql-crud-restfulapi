const sql = require("../models/db");

checkDuplicateEmail = (req, res, next) => {
  const email = req.body.email;
    sql.query(`SELECT * FROM users WHERE email = '${email}'`, (err, result) => {
        if (err) {
            console.log("error: ", err);
            return res.status(400).send({ status: "failed", message: "error!" });
        }
        if (result.length) {
            console.log("User duplicate email!: ", result[0]);
            return res.status(200).send({ status: "failed", message: "Duplicate Email!"});
        }
    next();
  });
};

const verifyUser = {
    checkDuplicateEmail,
};

module.exports = verifyUser;
