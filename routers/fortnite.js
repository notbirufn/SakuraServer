const express = require("express");
const app = express.Router();
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");



app.get("/fortnite/api/cloudstorage/system/config", async (req, res) => {
    res.json({
        "lastUpdated": new Date().toISOString(),
        "disableV2": true,
        "isAuthenticated": true,
        "enumerateFilesPath": "/api/cloudstorage/system",
        "enableMigration": false,
        "enableWrites": false,
        "epicAppName": "Live",
        "transports": {
            "McpProxyTransport": {
                "name": "McpProxyTransport",
                "type": "ProxyStreamingFile",
                "appName": "fortnite",
                "isEnabled": false,
                "isRequired": true,
                "isPrimary": true,
                "timeoutSeconds": 30,
                "priority": 10
            },
            "McpSignatoryTransport": {
                "name": "McpSignatoryTransport",
                "type": "ProxySignatory",
                "appName": "fortnite",
                "isEnabled": false,
                "isRequired": false,
                "isPrimary": false,
                "timeoutSeconds": 30,
                "priority": 20
            },
            "DssDirectTransport": {
                "name": "DssDirectTransport",
                "type": "DirectDss",
                "appName": "fortnite",
                "isEnabled": true,
                "isRequired": false,
                "isPrimary": false,
                "timeoutSeconds": 30,
                "priority": 30
            }
        }
    });
});

const default_device_profiles_ini = path.join(__dirname, "../responses/cloudstorage/DefaultDeviceProfiles.ini");
const default_engine_ini = path.join(__dirname, "../responses/cloudstorage/DefaultEngine.ini");
const default_game_ini = path.join(__dirname, "../responses/cloudstorage/DefaultGame.ini");
const default_runtime_options_ini = path.join(__dirname, "../responses/cloudstorage/DefaultRuntimeOptions.ini");

app.get("/fortnite/api/cloudstorage/system", async (req, res) => {
    res.json([{
        "uniqueFilename": "DefaultDeviceProfiles.ini",
        "filename": "DefaultDeviceProfiles.ini",
        "hash": crypto.createHash("sha1").update(fs.readFileSync(default_device_profiles_ini)).digest("hex"),
        "hash256": crypto.createHash("sha256").update(fs.readFileSync(default_device_profiles_ini)).digest("hex"),
        "length": fs.readFileSync(default_device_profiles_ini).length,
        "contentType": "application/octet-stream",
        "uploaded": fs.statSync(default_device_profiles_ini).mtime,
        "storageType": "S3",
        "storageIds": {},
        "doNotCache": false
    },{
        "uniqueFilename": "DefaultEngine.ini",
        "filename": "DefaultEngine.ini",
        "hash": crypto.createHash("sha1").update(fs.readFileSync(default_engine_ini)).digest("hex"),
        "hash256": crypto.createHash("sha256").update(fs.readFileSync(default_engine_ini)).digest("hex"),
        "length": fs.readFileSync(default_engine_ini).length,
        "contentType": "application/octet-stream",
        "uploaded": fs.statSync(default_engine_ini).mtime,
        "storageType": "S3",
        "storageIds": {},
        "doNotCache": false
    },{
        "uniqueFilename": "DefaultGame.ini",
        "filename": "DefaultGame.ini",
        "hash": crypto.createHash("sha1").update(fs.readFileSync(default_game_ini)).digest("hex"),
        "hash256": crypto.createHash("sha256").update(fs.readFileSync(default_game_ini)).digest("hex"),
        "length": fs.readFileSync(default_game_ini).length,
        "contentType": "application/octet-stream",
        "uploaded": fs.statSync(default_game_ini).mtime,
        "storageType": "S3",
        "storageIds": {},
        "doNotCache": false
    },{
        "uniqueFilename": "DefaultRuntimeOptions.ini",
        "filename": "DefaultRuntimeOptions.ini",
        "hash": crypto.createHash("sha1").update(fs.readFileSync(default_runtime_options_ini)).digest("hex"),
        "hash256": crypto.createHash("sha256").update(fs.readFileSync(default_runtime_options_ini)).digest("hex"),
        "length": fs.readFileSync(default_runtime_options_ini).length,
        "contentType": "application/octet-stream",
        "uploaded": fs.statSync(default_runtime_options_ini).mtime,
        "storageType": "S3",
        "storageIds": {},
        "doNotCache": false
    }]);
});

app.get("/fortnite/api/cloudstorage/system/DefaultDeviceProfiles.ini", async (req, res) => {
    res.set("content-type", "application/octet-stream");
    res.sendFile(default_device_profiles_ini);
});

app.get("/fortnite/api/cloudstorage/system/DefaultEngine.ini", async (req, res) => {
    res.set("content-type", "application/octet-stream");
    res.sendFile(default_engine_ini);
});

app.get("/fortnite/api/cloudstorage/system/DefaultGame.ini", async (req, res) => {
    res.set("content-type", "application/octet-stream");
    res.sendFile(default_game_ini);
});

app.get("/fortnite/api/cloudstorage/system/DefaultRuntimeOptions.ini", async (req, res) => {
    res.set("content-type", "application/octet-stream");
    res.sendFile(default_runtime_options_ini);
});

module.exports = app;
