const express = require("express");
const app = express.Router();

app.get("/friends/api/v1/:account_id/summary", async (req, res) => {
    res.json({
        "friends": [],
        "incoming": [],
        "outgoing": [],
        "suggested": [],
        "blocklist": [],
        "settings": {
          "acceptInvites": "public"
        }
    });
});

module.exports = app;