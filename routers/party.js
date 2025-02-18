const express = require("express");
const app = express.Router();

app.get("/party/api/v1/Fortnite/user/:account_id/notifications/undelivered/count", async (req, res) => {
    res.json({
        "invites": 0,
        "pings": 0
    });
});

app.get("/party/api/v1/Fortnite/user/:account_id/settings/privacy", async (req, res) => {
    res.json({
        "receiveInvites": "ALL",
        "receiveIntentions": "ALL"
    });
});

app.get("/party/api/v1/Fortnite/user/:account_id", async (req, res) => {
    res.json({
        "current": [],
        "pending": [],
        "invites": [],
        "pings": []
    });
});

app.post("/party/api/v1/Fortnite/parties", async (req, res) => {
    console.log(req.body);
    res.json({
        "id": "5135aa2c6484458093f02bef5cd13cfe",
        "created_at": "2025-02-18T08:38:14.933Z",
        "updated_at": "2025-02-18T08:38:14.933Z",
        "config": {
            "type": "DEFAULT",
            "joinability": "INVITE_AND_FORMER",
            "discoverability": "INVITED_ONLY",
            "sub_type": "default",
            "max_size": 16,
            "invite_ttl": 14400,
            "join_confirmation": true,
            "intention_ttl": 60
        },
        "members": [
            {
                "account_id": "2db21f844a344c46aeb60bb1a57c7dc4",
                "meta": {
                    "urn:epic:member:dn_s": "びいるくんです"
                }
                ,"connections": [
                    {
                        "id": "2db21f844a344c46aeb60bb1a57c7dc4@prod.ol.epicgames.com/V2:Fortnite:WIN::C084675D465175ECBC1D9C9CA71B4EAF",
                        "connected_at": "2025-02-18T08:38:14.356Z",
                        "updated_at": "2025-02-18T08:38:14.933Z",
                        "yield_leadership": false,
                        "meta": {
                            "urn:epic:conn:platform_s": "WIN"
                        }
                    }
                ],
                "revision": 0,
                "updated_at": "2025-02-18T08:38:14.938Z",
                "joined_at": "2025-02-18T08:38:14.938Z",
                "role": "CAPTAIN"
            }
        ],
        "applicants": [],
        "meta": {
            "urn:epic:cfg:party-type-id_s": "default",
            "urn:epic:cfg:join-request-action_s": "Manual",
            "urn:epic:cfg:chat-enabled_b": "true",
            "urn:epic:cfg:invite-perm_s": "Noone",
            "urn:epic:cfg:build-id_s": "1:3:39162266",
            "urn:epic:cfg:can-join_b": "true",
            "urn:epic:cfg:presence-perm_s": "Noone",
            "urn:epic:cfg:not-accepting-members-reason_i": "0",
            "urn:epic:cfg:accepting-members_b": "false"
        },
        "invites": [],
        "revision": 0,
        "intentions": []
    });
});

module.exports = app;