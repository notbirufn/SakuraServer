const express = require("express");
const app = express.Router();
const path = require("path");
const crypto = require('crypto');
const fs = require('fs');
app.get("/hotconfigs/v2/livefn.json", async (req, res) => {
    res.set("content-type", "application/json");
    res.sendFile(path.join(__dirname, "../responses/hotconfigs/livefn.json"));
});
app.get("/content/api/pages/fortnite-game", (req, res) => {
    const apiUrl = `https://fortnitecontent-website-prod07.ol.epicgames.com${req.originalUrl}`;
    const headers = {
        "user-agent": req.headers["user-agent"],
        "accept-language": req.headers["accept-language"]
    };

    fetch(apiUrl, { headers })
        .then(response => response.json())
        .then(data => {
            if (data["emergencynoticev2"]) {
                data["emergencynoticev2"]["emergencynotices"]["emergencynotices"] = [
                    {
                        "hidden": false,
                        "_type": "CommonUI Emergency Notice Base",
                        "title": "SakuraFN",
                        "body": "Welcome to sakuraFN."
                    }
                ];
            }
            res.json(data);
        })
        .catch(error => {
            res.status(500).send('Internal Server Error');
        });
});

module.exports = app;


//                                                                                                                                                                                                                  Made by iron web10  
