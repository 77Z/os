var $ = require("jquery");

$("#new-note").click(function () {
    var noteid = "note" + Math.random();


    $('#body').append("<div id='" + noteid +"'><div id='" + noteid +"header'></div></div>");
    
});