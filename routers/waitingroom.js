const express = require("express");
const app = express.Router();

app.get("/waitingroom/api/waitingroom", async (req, res) => {
    res.status(204).end();
});

module.exports = app;