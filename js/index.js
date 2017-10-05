var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "McLoken"];
//console.log(streamers);

//Function to build #twitch-content
streamers.forEach(function (element) {
	
	//Get Streaming info
	$.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + element + "?callback=?", function (json) {
		//console.log(json2.stream.channel.status); 
		
		//if live, add info from json file
		if(json.stream !== null) {
			$("<div class='user online'><span class='icon'><img src=" + json.stream.channel.logo + "></span><span class='username'><a href=\"https:\\\\www.twitch.tv\\" + json.stream.channel.name + "\">" + json.stream.channel.display_name + "</a><div class='status'>" + json.stream.channel.status.substr(0, 35) +"..." + "</div><span class='icon-active'><i class='fa fa-check'></i></span></div>").appendTo("#twitch-content");
		}
		
	
		//if not live, make another json request and use that info to add info
		else {
			$.getJSON("https://wind-bow.glitch.me/twitch-api/users/" + element + "?callback=?", function (json2) {
			//console.log(json.logo); 
				$("<div class='user offline'><span class='icon'><img src=" + json2.logo + "></span><span class='username'><a href='https:\\\\www.twitch.tv\\" + json2.name + "'>" + json2.display_name + "</a><div class='status'></div><span class='icon-inactive'><i class='fa fa-times'></i></span> </div>").appendTo("#twitch-content");
			});	
		}
});
});

//Clicking on tabs changes the color of the tabs
$("#tabs").on("click", ".tab", function (){
	$(".active").removeClass("active");
	$(this).addClass("active");
});

//Clicking Online Tab shows .online and hides .offline
$("#online").on("click", function (){
	$(".offline").hide("fade", 500);
	$(".online").show("fade", 500);
});

//Clicking on Offline tab shows offline channels and hides online channels
$("#offline").on("click", function (){
	$(".online").hide("fade", 500);
	$(".offline").show("fade", 500);
});

//Clicking All tab shows all channels
$("#all").on("click", function () {
		$(".online").show("fade", 500);
	$(".offline").show("fade", 500);
});