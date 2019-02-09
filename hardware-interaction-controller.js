var $ = require("jquery");
const remote = require('electron').remote;
var changeBrightness = require(node-brightness);

$("#soft-restart-button").click(function () {
    remote.app.relaunch();
    remote.app.exit(0);
});

$("#sleep-btn").click(function () {
    changeBrightness(brightness[1]);
});