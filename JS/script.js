let text = document.getElementById("BRAND");
function on(){
	$("#q1").css("color", "orange");
	$("#q2").css("color", "white");
	$("#q3").css("color", "white");
	$("#q4").css("color", "white");
	setTimeout(function(){
		$("#q1").css("color", "white");
	}, 3000)
	if ($("#STS").fadeOut()){
		$("#STS").fadeIn(500);
	}
	$("#end1").css("background", "red")
}
function tw(){
	$("#q2").css("color", "orange");
	$("#q1").css("color", "white");
	$("#q3").css("color", "white");
	$("#q4").css("color", "white");

	setTimeout(function(){
		$("#q2").css("color", "white");
	}, 3000)
	if ($("#BOOK").fadeOut()){
		$("#BOOK").fadeIn(500);
	}
	$("#end2").css("background", "red")
}
function menupl(){
	$("#q1").css("color", "white");
	$("#q2").css("color", "white");
	$("#q3").css("color", "white");
	$("#q4").css("color", "orange");
	setTimeout(function(){
		$("#q4").css("color", "white");
	}, 3000)
	if ($("#new").fadeOut()){
		$("#new").fadeIn(500);
	}
	/*$("#end2").css("background", "red")*/
}
function th(){
	$("#q3").css("color", "orange");
	$("#q2").css("color", "white");
	$("#q1").css("color", "white");
	setTimeout(function(){
		$("#q3").css("color", "white");
	}, 3000)
	if ($("#APP").fadeOut()){
		$("#APP").fadeIn(500);
	}
	$("#end3").css("background", "red")
}
function destroy_s(){
	$("#STS").fadeOut(500);
	$("#end1").css("background", "green")
	$("#end1").css("color", "green")
}
function destroy_b(){
	$("#BOOK").fadeOut(500);
	$("#end2").css("background", "green")
	$("#end1").css("color", "green")
}
function destroy_a(){
	$("#APP").fadeOut(500);
	$("#end3").css("background", "green")
	$("#end1").css("color", "green")
}
function destroy_add(){
	$("#new").fadeOut(500);
	$("#end").css("background", "green")
	$("#end1").css("color", "green")
}

/* download site */

$(".alert").fadeOut(0)
$(".download-button").click(function(){
	$(".alert").fadeIn(500)
	$(".all").fadeOut(0)
});

$("#endA").click(function(){
	$("#endA").css("background", "green")
	$(".alert").fadeOut(500)
	setTimeout(function(){
		$(".all").fadeIn(0)
		$("#endA").css("background", "red")
	}, 500)
});
setInterval(function(){
	let date = new Date()
	if (date.getMinutes() <10){
		$(".time").text(date.getHours()+":0"+date.getMinutes())
	}
	else{
		$(".time").text(date.getHours()+":"+date.getMinutes())
	}
}, 1)
console.log("App sucsess load!")