const mongoose = require("mongoose");
const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
const stringConn = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ds157653.mlab.com:57653/kleepers`;
mongoose
    .connect(stringConn, { useNewUrlParser: true })
    .then(() => {
       
        console.log("Connect to MongoDB successfully!");
    })
    .catch((err) => {
        console.log(err);
    });