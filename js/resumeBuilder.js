/*
This is empty on purpose! Your code to build the resume will go here.
 */
var awesomeThoughts = "My name is Tony and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);
$(document).click(function(loc){
	logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(name){
	name = name.trim().split(" ");
	console.log(name);

	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] + " " + name[1];
}

var work = {
	"jobs" : [
		{
			"employer": "123",
			"title": "333",
			"dates": "222",
			"location": "6692 Auto Center Drive Buena Park, CA 90621",
			"description": "this is a description"
		},
		{
			"employer": "321",
			"title": "555",
			"dates": "777",
			"location": "6701 Amador Plaza Road Dublin, CA 94568",
			"description": "this is another description"
		}
	]
};

for (job in work.jobs) {
	
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
	$(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
	$(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
	$(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
}

var projects = {
	"projects": [
	{
		"title": "555",
		"dates": "777",
		"image": ["images/fry.jpg"],
		"description": "this is another description"
	},
	{
		"title": "555",
		"dates": "777",
		"image": ["images/fry.jpg","images/fry.jpg","images/fry.jpg"],
		"description": "this is another description"
	}],
	"display" : function(){
		for(project in this.projects){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[project].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[project].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[project].description));
			if(this.projects[project].image.length > 0){
				for(img in this.projects[project].image){
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[project].image[img]));
				}
			}
			
		}
	}
};
projects.display();


var bio = {
	"name" : "Tony",
	"role": "Student",
	"welcomeMessage": "Hi!",
	"contacts": {
		"mobile": "321654987",
		"email" : "tony@home",
		"github": "@thisisai",
		"twitter": "@thisisai",
		"location" : "Chiayi, Taiwan"
	},
	"skills" : ["funny", "interesting", "brave"],
	"pic" : "images/fry.jpg"
};

if(bio.skills.length > 0){
	$("#header").append(HTMLheaderName.replace("%data%", "Tony"));
	$("#header").append(HTMLskillsStart);
	for(var i = 0 ; i < bio.skills.length; i++){
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

var education = {
	"schools": [{
		"name": "NCTU",
		"degree": "777",
		"dates": "2005",
		"location": "470 W Lancaster Ave Devon, PA 19333",
		"website" : "http://facebook.com",
		"majors": ["CS"]
	},{
		"name": "NTUST",
		"degree": "777",
		"dates": "2009",
		"location": "7 Aerial Way Syosset, NY 11791",
		"major": "this is another description"
	},{
		"name": "NCCU",
		"degree": "777",
		"dates": "2013",
		"location": "5840 W. Centinela Ave Los Angeles, CA 90045",
		"major": "this is another description"
	}],
	"onlineCourses" : [{
		"title": "JS",
		"school" : "Udacity",
		"dates" : "2015",
		"url": "http://udacity.com"
	}]
};

/*------- For google map --------*/

$("#mapDiv").append(googleMap);
$("#map").append(map);




