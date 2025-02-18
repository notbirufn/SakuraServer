const express = require("express");
const app = express.Router();

app.post("/priceengine/api/shared/offers/price", async (req, res) => {
    const response = require("../responses/priceengine/price.json");
    res.json(response);
});

module.exports = app;