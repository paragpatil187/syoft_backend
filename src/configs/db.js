const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://ankit:ankit12345@cluster0.rrtc5u1.mongodb.net/witbybit?retryWrites=true&w=majority");
};
