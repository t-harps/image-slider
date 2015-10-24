var IMAGES = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg'];
var CIRCLES = ['one','two','three','four','five','six'];
var CURRENT_IMAGE = 0;

function init() {
	$('.image').html("<img src="+IMAGES[CURRENT_IMAGE]+">");
}

function circle() {
	$(".circle").click(function(){
		var id = $(this).attr('id');
		$(".circle").removeClass("active");
		console.log(id);
		switch(id) {
			case 'one':
			  CURRENT_IMAGE = 0;
			  break;
			case 'two':
			  CURRENT_IMAGE = 1;
			  break;
			case 'three':
			  CURRENT_IMAGE = 2;
			  break;
			case 'four':
			  CURRENT_IMAGE = 3;
			  break;
			case 'five':
			  CURRENT_IMAGE = 4;
			  break;
			case 'six':
			  CURRENT_IMAGE = 5;
			  break;
		}
		$("#"+id).addClass("active");
		updateImage();
	});
}

function updateImage() {
	$('.image').fadeOut("slow", function(){
  	$('.image').html("<img src="+IMAGES[CURRENT_IMAGE]+">");
  	 $('.image').fadeIn("slow");
  });
}

function right() {
	$(".right").click(function(){
		$('.right').fadeOut("fast", function(){
			$('.right').fadeIn("fast");
		});
  	$("#"+CIRCLES[CURRENT_IMAGE]).removeClass("active");
  	CURRENT_IMAGE += 1;
  	if (CURRENT_IMAGE === 6) {
  		CURRENT_IMAGE = 0;
  	}
  	$("#"+CIRCLES[CURRENT_IMAGE]).addClass("active");
  	updateImage();
  });
}

function left() {
	$(".left").click(function(){
		$('.left').fadeOut("fast", function(){
			$('.left').fadeIn("fast");
		});
		$("#"+CIRCLES[CURRENT_IMAGE]).removeClass("active");
  	CURRENT_IMAGE -= 1;
  	if (CURRENT_IMAGE === -1) {
  		CURRENT_IMAGE = 5;
  	}
  	$("#"+CIRCLES[CURRENT_IMAGE]).addClass("active");
  	updateImage();
  });
}

function update() {
	setInterval(function(){
  	$("#"+CIRCLES[CURRENT_IMAGE]).removeClass("active");
		CURRENT_IMAGE += 1;
  	if (CURRENT_IMAGE === 6) {
  		CURRENT_IMAGE = 0;
  	}
		updateImage();
		$("#"+CIRCLES[CURRENT_IMAGE]).addClass("active");
	},6000);
	circle();
  right();
  left();
}

$(document).ready(function(){
	init();
  update();
});