$(document).ready( function () {
	alert("The page has loaded");
	$(".content-box").hide();
	$(".image-box").hide();
	$(".assignment1").hide();
	$(".content-box").fadeIn(1000, function(){
		$(".image-box").fadeIn(500);
	});
	var LoopScroll = true;
	floatAnimation();
	
	$(window).scroll(function(event){
		if (LoopScroll === true) {
			LoopScroll = false;
			var lastPosition = $('.plane').css("transform");
			//console.log(lastPosition);
			$('.plane').stop(true);
			$('.plane').transition({transform: 'rotateX(-5deg) rotateY(5deg)'}, 800, function(){
				//console.log("The scroll callback has fired");
				$('.plane').transition({transform: lastPosition}, 800);
				LoopScroll = true;
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


	$('.portfolio-grid').hover( function() {
		$('.assignment1').stop(true, true);
		$(".assignment1").show();
		$('.assignment1').transition({width: '100%', opacity: '1', top: '-1000px', transform: 'translate3d(0px,-200px,500px)'}, 1000);
	}, function() {
		$('.assignment1').stop(true);
		$('.assignment1').transition({width: '33%', opacity: '0', top: '0px', transform: 'translate3d(0px,0px,0px)'}, 500);
	});


/*	var lastScrollTop = 0;
	$(window).scroll(function(event){
   		var st = $(this).scrollTop();
   		if (st > lastScrollTop){
   			$('.plane').transition({transform: 'rotateX(-5deg) rotateY(10deg)'}, 800, function(){
   				floaterBack();
   			});
       // downscroll code
   		} else {
      // upscroll code
   		}
   		lastScrollTop = st;
	});*/


	
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

