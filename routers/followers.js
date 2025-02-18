const express = require("express");
const app = express.Router();

app.get("/followers/api/v1/FortniteLive/:account_id/followed", async (req, res) => {
    res.json({
        "followed": []
    });
});

module.exports = app;