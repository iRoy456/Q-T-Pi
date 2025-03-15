const express = require("express");
const Queue = require("../models/Queue");

const router = express.Router();

// Add a person to the queue
router.post("/enqueue", async (req, res) => {
    try {
        const { name, phone } = req.body;
        const newEntry = new Queue({ name, phone });
        await newEntry.save();
        res.status(201).json({ message: "Added to queue", entry: newEntry });
    } catch (error) {
        res.status(500).json({ error: "Failed to enqueue" });
    }
});

// Remove the first person from the queue
router.delete("/dequeue", async (req, res) => {
    try {
        const firstInQueue = await Queue.findOne().sort({ timestamp: 1 });
        if (!firstInQueue) {
            return res.status(400).json({ message: "Queue is empty" });
        }
        await Queue.findByIdAndDelete(firstInQueue._id);
        res.json({ message: "Removed from queue", removedEntry: firstInQueue });
    } catch (error) {
        res.status(500).json({ error: "Failed to dequeue" });
    }
});

// Get the entire queue
router.get("/list", async (req, res) => {
    try {
        const queueList = await Queue.find().sort({ timestamp: 1 });
        res.json(queueList);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch queue" });
    }
});

module.exports = router;
