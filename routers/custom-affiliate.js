const express = require("express");
const app = express.Router();
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

app.get('/affiliate/api/public/affiliates/slug/:slug', async (req, res) => {
    res.json({
			id: '97320508149273650928461029384017',
			slug: req.params.affiliateName,
			displayName: req.params.affiliateName,
			status: 'ACTIVE',
			verified: true
		})
})
//                                                                                                                                                                                                         Made By iron web10
module.exports = app;
