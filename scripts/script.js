$(document).ready( function () {
	alert("The page has loaded");
	$(".content-box").hide();
	$(".image-box").hide();
	$(".content-box").fadeIn(1000, function(){
		$(".image-box").fadeIn(500);
	});
	floatAnimation();

	
	/*$('.plane').transition({transform: 'rotateY(10deg)'}, 2000, function(){
		floater();
	});*/
	/*var user = Cookies.get('name');
	
	if (Cookies.get('name') == undefined) {

		var username = prompt("Your name");
		console.log(username);
		Cookies.set('name', username);
		console.log(Cookies.get('name'));*/
		//setTimeout(animateHtml, 500);
	/*} else {
		$("h2").html(user);
	};*/
	
});

function floatAnimation() {
	$('.plane').transition({transform: 'rotateY(10deg) translateZ(10px)'}, 5000, function(){
		floaterBack();
	});
};

function floaterBack() {
	$('.plane').transition({transform: 'rotateY(15deg) translateZ(-10px)'}, 5000, function(){
		floatAnimation();
	});
	console.log('This function has fired');
};