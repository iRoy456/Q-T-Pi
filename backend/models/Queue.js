const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Queue", queueSchema);

