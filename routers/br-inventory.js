const express = require("express");
const app = express.Router();
const path = require("path");

app.get("/fortnite/api/game/v2/br-inventory/account/:accountId", async (req, res) => {
    res.json({
        "stash": {
            "globalcash": 99999
        }
    });
})

module.exports = app;
