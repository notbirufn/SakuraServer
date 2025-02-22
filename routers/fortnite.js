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

app.get("/fortnite/api/game/v2/enabled_features", async (req, res) => {
    res.json([]);
});

app.post("/fortnite/api/game/v2/profile/:account_id/client/:operation", async (req, res) => {
    res.json([]);
});

app.get("/fortnite/api/storefront/v2/keychain", async (req, res) => {
    const response = require("../responses/storefront/keychain.json");
    res.json(response);
});

app.get("/fortnite/api/storefront/v2/catalog", async (req, res) => {
    const response = require("../responses/storefront/catalog.json");
    res.json(response);
});

app.get("/fortnite/api/calendar/v1/timeline", async (req, res) => {
    //const response = require("../responses/calendar/timeline.json");
    //res.json(response);

    const season = req.headers["user-agent"].split("++Fortnite+Release-")[1].split(".")[0];

    res.json({
        "channels" : {
            "standalone-store" : {
                "states" : [
                    {
                        "validFrom" : "0001-01-01T00:00:00.000Z",
                        "activeEvents" : [],
                        "state" : {
                            "activePurchaseLimitingEventIds" : [],
                            "storefront" : {},
                            "rmtPromotionConfig" : [],
                            "storeEnd" : "0001-01-01T00:00:00.000Z"
                        }
                    }
                ],
                "cacheExpire" : "9999-12-31T23:59:59.999Z"
            },
            "client-matchmaking" : {
                "states" : [
                    {
                        "validFrom" : "0001-01-01T00:00:00.000Z",
                        "activeEvents" : [],
                        "state" : {
                            "region" : {
                                "ME" : {},
                                "NAE" : {},
                                "NAW" : {},
                                "NAC" : {},
                                "EU" : {},
                                "BR" : {},
                                "OCE" : {},
                                "ASIA" : {}
                            }
                        }
                    }
                ],
                "cacheExpire" : "9999-12-31T23:59:59.999Z"
            },
            "tk" : {
                "states" : [
                    {
                        "validFrom" : "0001-01-01T00:00:00.000Z",
                        "activeEvents" : [],
                        "state" : {
                            "k" : []
                        }
                    }
                ],
                "cacheExpire" : "9999-12-31T23:59:59.999Z"
            },
            "featured-islands" : {
                "states" : [
                    {
                        "validFrom" : "0001-01-01T00:00:00.000Z",
                        "activeEvents" : [],
                        "state" : {
                            "islandCodes" : [],
                            "playlistCuratedContent" : {},
                            "playlistCuratedHub" : {},
                            "islandTemplates" : []
                        }
                    }
                ],
                "cacheExpire" : "9999-12-31T23:59:59.999Z"
            },
            "community-votes" : {
                "states" : [
                    {
                        "validFrom" : "0001-01-01T00:00:00.000Z",
                        "activeEvents" : [],
                        "state" : {
                            "electionId" : "",
                            "candidates" : [],
                            "electionEnds" : "9999-12-31T23:59:59.999Z",
                            "numWinners" : 1
                        }
                    }
                ],
                "cacheExpire" : "9999-12-31T23:59:59.999Z"
            },
            "client-events" : {
                "states" : [
                    {
                        "validFrom" : "0001-01-01T00:00:00.000Z",
                        "activeEvents" : [
                            {
                                "eventType" : `EventFlag.LobbySeason${season}`,
                                "activeUntil" : "9999-12-31T23:59:59.999Z",
                                "activeSince" : "0001-01-01T00:00:00.000Z"
                            }
                        ],
                        "state" : {
                            "activeStorefronts" : [],
                            "eventNamedWeights" : {},
                            "activeEvents" : [],
                            "seasonNumber" : Number(season),
                            "seasonTemplateId" : `AthenaSeason:athenaseason${season}`,
                            "matchXpBonusPoints" : 0,
                            "eventPunchCardTemplateId" : "",
                            "seasonBegin" : "0001-01-01T00:00:00.000Z",
                            "seasonEnd" : "9999-12-31T23:59:59.999Z",
                            "seasonDisplayedEnd" : "0001-01-01T00:00:00.000Z",
                            "weeklyStoreEnd" : "0001-01-01T00:00:00.000Z",
                            "stwEventStoreEnd" : "9999-12-31T23:59:59.999Z",
                            "stwWeeklyStoreEnd" : "9999-12-31T23:59:59.999Z",
                            "sectionStoreEnds" : {},
                            "rmtPromotion" : "",
                            "dailyStoreEnd" : "9999-12-31T23:59:59.999Z"
                        }
                    }
                ],
                "cacheExpire" : "9999-12-31T23:59:59.999Z"
            }
        },
        "cacheIntervalMins" : 15.0,
        "currentTime" : new Date().toISOString()
    });
});

app.get("/fortnite/api/discovery/accessToken/:branch_name", async (req, res) => {
    res.json({
        "branchName": req.params.branch_name,
        "appId": "Fortnite",
        "token": "SakuraServer"
    });
});


const default_device_profiles_ini = path.join(__dirname, "../cloudstorage/DefaultDeviceProfiles.ini");
const default_engine_ini = path.join(__dirname, "../cloudstorage/DefaultEngine.ini");
const default_game_ini = path.join(__dirname, "../cloudstorage/DefaultGame.ini");
const default_runtime_options_ini = path.join(__dirname, "../cloudstorage/DefaultRuntimeOptions.ini");

app.get("/fortnite/api/cloudstorage/system/config", async (req, res) => {
    res.json({
        "lastUpdated": "0001-01-01T00:00:00.000Z",
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

app.get("/fortnite/api/cloudstorage/user/config", async (req, res) => {
    res.json({
        "lastUpdated": "0001-01-01T00:00:00.000Z",
        "disableV2": true,
        "isAuthenticated": true,
        "enumerateFilesPath": "/api/cloudstorage/user",
        "enableMigration": false,
        "enableWrites": true,
        "epicAppName": "Live",
        "transports": {
            "McpProxyTransport": {
                "name": "McpProxyTransport",
                "type": "ProxyStreamingFile",
                "appName": "fortnite",
                "isEnabled": true,
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
                "isEnabled": false,
                "isRequired": false,
                "isPrimary": false,
                "timeoutSeconds": 30,
                "priority": 30
            }
        }
    });
});

app.get("/fortnite/api/cloudstorage/user/:account_id", async (req, res) => {
    res.json([]);
});

app.put("/fortnite/api/cloudstorage/user/:account_id/ClientSettings.Sav", async (req, res) => {
    res.status(204).end();
});

module.exports = app;