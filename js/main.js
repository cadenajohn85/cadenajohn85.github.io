"use strict";

$(document).ready(function() {

    // Placeholder text variable

    var lorem = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque consequuntur dicta eos est eveniet illum in ipsa iure laudantium magni minus perferendis, qui quos sint sit tempore veniam.</p>";
    lorem += "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque consequuntur dicta eos est eveniet illum in ipsa iure laudantium magni minus perferendis, qui quos sint sit tempore veniam.</p>";
    lorem += "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque consequuntur dicta eos est eveniet illum in ipsa iure laudantium magni minus perferendis, qui quos sint sit tempore veniam.</p>";
    lorem += "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque consequuntur dicta eos est eveniet illum in ipsa iure laudantium magni minus perferendis, qui quos sint sit tempore veniam.</p>";
    lorem += "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque consequuntur dicta eos est eveniet illum in ipsa iure laudantium magni minus perferendis, qui quos sint sit tempore veniam.</p>";
    lorem += "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque consequuntur dicta eos est eveniet illum in ipsa iure laudantium magni minus perferendis, qui quos sint sit tempore veniam.</p>";

    // NavBar click functions

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
            "<p>Personal background information goes here</p>"
        );
        $("#viewport").append(lorem);
    });

    $("#contact").click(function(event) {
        event.preventDefault();
        var dynamicHtml = "<h1 class='mt-4 ml-3'>John M. Cadena</h1>";
        dynamicHtml += "<ul id='contact-info-list' class='list-unstyled mt-4 ml-3'>";
        // Job Seeker
        dynamicHtml += "<li class='mb-3'>";
        dynamicHtml += "Seeking a position as a Front-End Developer in San Antonio, TX in Dec. 2019";
        dynamicHtml += "</li>";
        // E-mail
        dynamicHtml += "<li>";
        dynamicHtml += "<i class=\"fas fa-envelope-square\"></i>";
        dynamicHtml += "<a class='ml-2' href='mailto:cadena.john.85@gmail.com'>cadena.john.85@gmail.com</a>";
        dynamicHtml += "</li>";
        // LinkedIn
        dynamicHtml += "<li>";
        dynamicHtml += "<i class=\"fab fa-linkedin\"></i>";
        dynamicHtml += "<a class='ml-2' href='https://www.linkedin.com/' target='_blank'>LinkedIn</a>";
        dynamicHtml += "</li>";
        // GitHub
        dynamicHtml += "<li>";
        dynamicHtml += "<i class=\"fab fa-github-square\"></i>";
        dynamicHtml += "<a class='ml-2' href='https://github.com/cadenajohn85' target='_blank'>cadenajohn85</a>";
        dynamicHtml += "</li>";
        // Twitter
        dynamicHtml += "<li>";
        dynamicHtml += "<i class=\"fab fa-twitter-square\"></i>";
        dynamicHtml += "<a class='ml-2' href='https://twitter.com/johnmcadena' target='_blank'>@JohnMCadena</a>";
        dynamicHtml += "</li>";
        dynamicHtml += "</ul>";

        $("#viewport").html(dynamicHtml);
        $("#contact-info-list").css("font-size", "1.5em");
    });

});