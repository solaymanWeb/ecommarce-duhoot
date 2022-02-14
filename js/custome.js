$(document).ready(function(){
//Scroll Top
$(".top").click(function(){
	$("html, body").animate({
		scrollTop:0,
	},600)
});
$(window).scroll(function(){

var ourwindow = $(this).scrollTop();

 if(ourwindow < 100){
 	$(".top").fadeOut();
 }else{
 	$(".top").fadeIn();
 }

});
//Header Menu

$(".navbar-nav li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});
//sticky Header

 $("#stick-header").sticky({topSpacing:0});
 //Login Form

 $(".login").click(function(){
	$(".login-area").slideToggle({
		duration:300,
		loop:true,
	});
});


 $(".close").click(function(){
 	$(".login-form").slideUp({
 		loop:true,
 	});
 });

$(".update-items ul li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});

$(".search-form").click(function(){
	$(".click-search").toggle();
});

/*auto click acroll off*/

$('.navbar-nav a[href*="#"]').click(function(e){
	e.preventDefault();
	var target = this.hash;
	$("html,body").animate({
		scrollTop: $(target).offset().top - 97
	},500);
});
 
/* tab-ui*/
  $( function() {
    $( "#tab" ).tabs();
  });



$(".offer-tab-icon ul li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});

 new WOW().init();

	
});