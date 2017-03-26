$(document).ready( function () {
	//alert("The page has loaded");
	$(".content-box").hide();
	$(".image-box").hide();
	$(".assignment1").hide();
	$(".content-box").fadeIn(1000, function(){
		$(".image-box").fadeIn(500);
	});
	var LoopScroll = true;
	var one = $('#one');
	floatAnimation();
	
	$(window).scroll(function(event){
		if (LoopScroll === true) {
			LoopScroll = false;
			var lastPosition = $('.plane').css("transform");
			//console.log(lastPosition);
			$('.plane').stop();
			$('.plane').transition({transform: 'rotateX(-5deg) rotateY(5deg)'}, 800, function(){
				//console.log("The scroll callback has fired");
				$('.plane').transition({transform: lastPosition}, 800, function() {
					LoopScroll = true;
				});
			});
		};
   	});

	function floatAnimation() {
		$('.plane').transition({transform: 'rotateY(5deg) translateZ(10px)'}, 5000, function(){
			floaterBack();
		});
	};

	function floaterBack() {
		$('.plane').transition({transform: 'rotateY(10deg) translateZ(-10px)'}, 5000, function(){
			floatAnimation();
			console.log('This function has fired');
		});
	};


	$('#one').hover( function() {
		// glowAnimation.call(one);
		$('.assignment1').stop(true, true);
		$('.assignment1').show();
		$('.assignment1').transition({width: '100%', opacity: '1', top: '-1000px', transform: 'translate3d(0px,-200px,500px)'}, 500);
	}, function() {
		$('.assignment1').stop(true);
		$('.assignment1').transition({width: '33%', opacity: '0', top: '0px', transform: 'translate3d(0px,0px,0px)'}, 500);
	});


	/*function glowAnimation() {
		if (glowLoop === true) {
			this.transition({textShadow: '-1px -2px 10px turquoise'}, 1000, false, function() {
				this.transition({textShadow: '0px 0px 0px turquoise'}, 1000, false, glowAnimation);
			});
		};
	};*/

	
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

