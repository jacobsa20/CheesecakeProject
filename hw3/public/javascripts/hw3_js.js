import { get } from "http";

//This function is supposed to check that the specialInstructions class does not have "vegan" or "Vegan"
//in the textbox... 

$(function(){
	$(".month").click(function(event){
		get('./routes/orders.js')
	})
});

$(function(){
	$(".orderButton").click(function(event){
		var veganString= ".specialInstructions"
		if(veganString.includes("vegan"|"Vegan")){
			alert("These desserts cannot be made vegan you heathen.")
		}
//so far it only understands the else statement:
		else{
			$(".orders").hide()
			$(".month").hide()
			$(".specialInstructions").hide()
		}
	})
});

