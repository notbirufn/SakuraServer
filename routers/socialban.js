const express = require("express");
const app = express.Router();

app.get("/socialban/api/public/v1/:account_id", async (req, res) => {
    res.json({
        "bans": [],
        "warnings": []
    });
});

module.exports = app;