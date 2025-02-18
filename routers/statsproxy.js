const express = require("express");
const app = express.Router();

app.get("/statsproxy/api/statsv2/account/:account_id", async (req, res) => {
    res.json({
        "startTime": 0,
        "endTime": 9223372036854775807,
        "stats": {},
        "accountId": req.params.account_id
      });
});

module.exports = app;