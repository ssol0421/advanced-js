var commentForDay = function(day){
	switch(day){
		case "Monday":
			console.log("Get enough coffee and survive");
			break;
		case "Tuesday":
			console.log("Keep calm and have more coffee");
			break;
		case "Wednesday":
			console.log("It's hump day");
			break;
		case "Thursday":
			console.log("WooHoo! It's Happy Thursday");
			break;
		case "Friday":
			console.log("You made it. It's Friday!");
			break;
		case "Saturday", "Sunday":
			console.log("It's weekend. Let's take a rest");
			break;
		default:
			console.log("Please give me a valid day^^");
			break;
	}
}