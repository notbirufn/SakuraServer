const express = require("express");
const app = express.Router();

app.get("/presence/api/v1/_/:account_id/last-online", async (req, res) => {
    res.json({});
});

module.exports = app;