const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const authUser = require("../middlewares/authUser");
module.exports = app => {
    app.post("/api/user/create", async(req, res) => {
        console.log("aaaa");
        try {
            let { email, password, name, key, access_token, trash, role } = req.body;
            password = bcrypt.hashSync(password, 10);
            console.log(email, password, name, key, access_token, trash, role);
            let user = new User({
                email,
                password,
                name,
                key,
                access_token,
                trash,
                role
            });
            //console.log(user);
            await user.save();
            //console.log(user);
            res.status(200).send(user);
        } catch (err) {
            return res.status(400).send(err);
        }
        //return res.status(401).send({ message: "Login fail!", err: true });
    });
    app.get("/api/user", async(req, res) => {
        console.log('aaaa');
        try {
            let user = await User.find();
            res.status(200).send(user);

        } catch (err) {
            return res.status(400).send(err);
        }
        //  return res.status(401).send({ message: "Login fail!", err: true });
    });
    app.post("/api/login", async(req, res) => {

        let { email, password } = req.body;
        try {
            if (!email) throw "Vui lòng nhập email"
            if (!password) throw "Vui lòng nhập mật khẩu"

            const user = await User.findOne({ email: email });

            if (!user) throw "email không tồn tại";

            let password_enter = bcrypt.compareSync(password, user.password);

            if (!password_enter) throw "Mật khẩu không chính xác"

            let mahoa = user;

            mahoa.password = ''
            mahoa.access_token = ''

            const token = jwt.sign({
                mahoa
            }, 'phongngo0123456789', { expiresIn: 60 * 60 });

            user.access_token = token;

            user.save();

            res.status(200).send(user);

        } catch (err) {
            return res.status(400).send(err);
        }
    })
};