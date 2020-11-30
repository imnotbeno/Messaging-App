const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    user: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);

