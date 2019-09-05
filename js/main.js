"use strict";

$(document).ready(function() {

    $("#resume").click(function(event) {
        event.preventDefault();
        $("#viewport").html(
            "Resume content goes here"
        );
    });

    $("#portfolio").click(function(event) {
        event.preventDefault();
        $("#viewport").html(
            "Portfolio links go here"
        );
    });

    $("#background").click(function(event) {
        event.preventDefault();
        $("#viewport").html(
            "Personal background information goes here"
        );
    });

    $("#contact").click(function(event) {
        event.preventDefault();
        var dynamicHtml = "<h1>John M. Cadena</h1>";
        dynamicHtml += "<ul class='list-unstyled'>";
        dynamicHtml += "<li><a href='mailto:cadena.john.85@gmail.com'>cadena.john.85@gmail.com</a></li>";
        dynamicHtml += "<li>(future LinkedIn)</li>";
        dynamicHtml += "<li><a href='https://github.com/cadenajohn85' target='_blank'>https://github.com/cadenajohn85</a> </li>";
        dynamicHtml += "</ul>";
        $("#viewport").html(dynamicHtml);
    });

});