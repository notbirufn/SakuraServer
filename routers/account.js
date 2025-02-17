const express = require("express");
const app = express.Router();
const crypto = require("crypto");
const jsonwebtoken = require("jsonwebtoken");

app.post("/account/api/oauth/token", async (req, res) => {
    if (req.body.grant_type == "client_credentials" && req.body.token_type == "eg1") {
        const access_token = jsonwebtoken.sign({
            "p": crypto.randomBytes(24).toString("base64").slice(0, 32),
            "clsvc": "prod-fn",
            "t": "s",
            "mver": false,
            "clid": "ec684b8c687f479fadea3cb2ad83f5c6",
            "ic": true,
            "exp": 1736156021,
            "am": "client_credentials",
            "iat": 1736141621,
            "jti": crypto.randomBytes(16).toString("hex"),
            "pfpid": "prod-fn"
        }, "sakura");
        res.json({
            "access_token": `eg1~${access_token}`,
            "expires_in": 14400,
            "expires_at": new Date(new Date().getTime() + 14400 * 1000).toISOString(),
            "token_type": "bearer",
            "client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
            "internal_client": true,
            "client_service": "prod-fn",
            "product_id": "prod-fn",
            "application_id": "fghi4567UG3ZXlhvevzKJI65wfTUoYBC"
        });
    }

    if (req.body.grant_type == "exchange_code" && req.body.token_type == "eg1") {
        const access_token = jsonwebtoken.sign({
            "app": "prod-fn",
            "sub": req.body.exchange_code || "SakuraPlayer",
            "mver": false,
            "clid": "ec684b8c687f479fadea3cb2ad83f5c6",
            "dn": req.body.exchange_code || "SakuraPlayer",
            "am": "exchange_code",
            "pfpid": "prod-fn",
            "p": "SAKURA",
            "iai": req.body.exchange_code || "SakuraPlayer",
            "sec": 1,
            "acr": "urn:epic:loa:aal1",
            "clsvc": "prod-fn",
            "t": "s",
            "scope": "basic_profile",
            "auth_time": 1739804511,
            "ic": true,
            "exp": 1739811711,
            "iat": 1739804511,
            "jti": crypto.randomBytes(16).toString("hex"),
        }, "sakura");
        const refresh_token = jsonwebtoken.sign({
            "sub": req.body.exchange_code || "SakuraPlayer",
            "t": "r",
            "clid": "ec684b8c687f479fadea3cb2ad83f5c6",
            "exp": 1739833311,
            "am": "exchange_code",
            "jti": crypto.randomBytes(16).toString("hex"),
            "pfpid": "prod-fn"
        }, "sakura");
        res.json({
            "access_token": `eg1~${access_token}`,
            "expires_in": 7200,
            "expires_at": new Date(new Date().getTime() + 7200 * 1000).toISOString(),
            "token_type": "bearer",
            "refresh_token": `eg1~${refresh_token}`,
            "refresh_expires": 28800,
            "refresh_expires_at": new Date(new Date().getTime() + 28800 * 1000).toISOString(),
            "account_id":  req.body.exchange_code || "SakuraPlayer",
            "client_id": "ec684b8c687f479fadea3cb2ad83f5c6",
            "internal_client": true,
            "client_service": "prod-fn",
            "scope": [ "basic_profile" ],
            "displayName":  req.body.exchange_code || "SakuraPlayer",
            "app": "prod-fn",
            "in_app_id":  req.body.exchange_code || "SakuraPlayer",
            "product_id": "prod-fn",
            "application_id": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
            "acr": "urn:epic:loa:aal1",
            "auth_time": new Date().toISOString(),
        });
    }
});

app.delete("/account/api/oauth/sessions/kill", async (req, res) => {
    res.status(204).end();
});

app.get("/account/api/public/account/:account_id/externalAuths", async (req, res) => {
    res.json([]);
});

app.get("/account/api/public/account/:account_id", async (req, res) => {
    res.json({
        "id": req.params.account_id || "SakuraPlayer",
        "displayName": req.params.account_id || "SakuraPlayer",
        "name": "Sakura",
        "email": "sakura@epicgames.com",
        "failedLoginAttempts": 0,
        "lastLogin": "0001-01-01T00:00:00.000Z",
        "numberOfDisplayNameChanges": 1,
        "ageGroup": "UNKNOWN",
        "headless": false,
        "country": "JP",
        "lastName": "Server",
        "preferredLanguage": "ja",
        "lastDisplayNameChange": "0001-01-01T00:00:00.000Z",
        "canUpdateDisplayName": true,
        "tfaEnabled": true,
        "emailVerified": true,
        "minorVerified": false,
        "minorExpected": false,
        "minorStatus": "NOT_MINOR",
        "cabinedMode": false,
        "hasHashedEmail": false
    });
});

app.get("/account/api/public/account", async (req, res) => {
    res.json([{
        "id": req.query.accountId,
        "displayName": req.query.accountId,
        "externalAuths": {}
    }]);
});

module.exports = app;