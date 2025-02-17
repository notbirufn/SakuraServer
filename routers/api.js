const express = require("express");
const app = express.Router();
const path = require("path");

app.get("/hotconfigs/v2/livefn.json", async (req, res) => {
    res.set("content-type", "application/json");
    res.sendFile(path.join(__dirname, "../responses/hotconfigs/livefn.json"));
});

module.exports = app;