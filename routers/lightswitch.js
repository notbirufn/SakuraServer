const express = require("express");
const app = express.Router();
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

app.get("/fortnite/api/v2/versioncheck/Windows", async (req, res) => {
    res.json({
        "type": "NO_UPDATE"
    });
});
app.get("/lightswitch/api/service/bulk/status", (req, res) => {
    res.json([
        {
            "serviceInstanceId": "fortnite",
            "status": "UP",
            "message": "Fortnite is online",
            "maintenanceUri": null,
            "overrideCatalogIds": [
                "a7f138b2e51945ffbfdacc1af0541053"
            ],
            "allowedActions": [],
            "banned": false,
            "launcherInfoDTO": {
                "appName": "Fortnite",
                "catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
                "namespace": "fn"
            }
        }
    ]);
});
module.exports = app;
