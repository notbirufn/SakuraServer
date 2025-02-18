const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({
    "extended": true
}));
app.use(express.static("public"));

const listener = app.listen(1911, function() {
    console.log(listener.address());

    //const json = require("./links.json");
    //fs.writeFileSync("links.json", JSON.stringify(json, null, 4));
});

app.use(function(req, res, next) {
    next();
});

app.use(require("./routers/account"));
app.use(require("./routers/api"));
app.use(require("./routers/eulatracking"));
app.use(require("./routers/followers"));
app.use(require("./routers/fortnite"));
app.use(require("./routers/friends"));
app.use(require("./routers/lightswitch"));
app.use(require("./routers/links"));
app.use(require("./routers/party"));
app.use(require("./routers/presence"));
app.use(require("./routers/priceengine"));
app.use(require("./routers/socialban"));
app.use(require("./routers/statsproxy"));
app.use(require("./routers/waitingroom"));

app.use(function(req, res, next) {
    console.log("LogURL: " + req.method + ": " + req.originalUrl);
});
