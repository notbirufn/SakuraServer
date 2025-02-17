const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    "extended": true
}));
app.use(express.static("public"));

const listener = app.listen(1911, function() {
    console.log(listener.address());
});

app.use(function(req, res, next) {
    next();
});

app.use(require("./routers/account"));
app.use(require("./routers/api"));
app.use(require("./routers/eulatracking"));
app.use(require("./routers/fortnite"));
app.use(require("./routers/waitingroom"));

app.use(function(req, res, next) {
    console.log("LogURL: " + req.method + ": " + req.originalUrl);
});
