const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const authUser = require("../middlewares/authUser");

module.exports = app => {
    app.post("/api/user/create", async(req, res) => {
      
        try {

            let { email,password,name,key,access_token, trash, role } = req.body;
            password = bcrypt.hashSync(password, 10);
              let user = new User({
                email,
                password,
                name,
                key,
                access_token,
                trash,
                role
              });
              await user.save();
              res.status(200).send(user);
        } catch (err) {
            return res.status(400).send(err);
        }
        //return res.status(401).send({ message: "Login fail!", err: true });
    });
    app.get("/api/user", async(req, res) => {
      
        try {
            let user = await User.find();
            res.status(200).send(user);

        } catch (err) {
            return res.status(400).send(err);
        }
      //  return res.status(401).send({ message: "Login fail!", err: true });
    });




   
};