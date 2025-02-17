const express = require("express");
const app = express.Router();
const path = require("path");

app.get("/eulatracking/api/public/agreements/:eula_id/account/:account_id", async (req, res) => {
    res.status(204).end();
});

module.exports = app;