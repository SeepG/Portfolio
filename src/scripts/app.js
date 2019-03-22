

function ToggleView(navElement){
	$("#about-container").hide();
	$("#skills-container").hide();
	$("#contact-container").hide();
	$("#email-container").hide();
	if(navElement === "About"){
		$("#about-container").show();
	}
	else if(navElement === "Skills"){
		$("#skills-container").show();
	}
	else if(navElement === "Contact"){
		$("#contact-container").show();
	}
	else if(navElement === "Email"){
		$("#email-container").show();
	}
}