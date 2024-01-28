const { MongoClient } = require("mongodb");
let mongoose = require("mongoose");


async function establishConnection(url) {
    mongoose
        .connect(url)
        .then(() => console.log("Connected! successfully"))
        .catch((err) => console.log("Couldn't connect", err));

}

module.exports = { establishConnection }