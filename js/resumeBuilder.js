/*
This is empty on purpose! Your code to build the resume will go here.
 */
var awesomeThoughts = "My name is Tony and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Tony Chen");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");
$("#header").prepend(formattedName).append(formattedRole);