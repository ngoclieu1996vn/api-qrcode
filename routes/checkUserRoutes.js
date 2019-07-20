const mongoose = require("mongoose");
const CheckUser = mongoose.model("CheckUser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


module.exports = app => {
    app.post("/api/checkuser/create", async(req, res) => {

        try {

          let { _users ,times,room,trash} = req.body;
         
            let checkUser = new CheckUser({
              _users    ,
              times,
              room,
              trash, 
            });
            await checkUser.save();
            res.status(200).send(checkUser);
        } catch (err) {
            return res.status(400).send(err);
        }
        //return res.status(401).send({ message: "Login fail!", err: true });
    });
    app.get("/api/checkuser", async(req, res) => {
      
        try {
            let checkUser = await CheckUser.find();
            res.status(200).send(checkUser);

        } catch (err) {
            return res.status(400).send(err);
        }
      //  return res.status(401).send({ message: "Login fail!", err: true });
    });




   
};