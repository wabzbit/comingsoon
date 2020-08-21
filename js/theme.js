(function($){
	 "use strict";
	var window_width = $(window).width();
	 var myPlayer;

new grid3D( document.getElementById( 'grid3d' ) );
  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
 
  $('.c-hamburger').on('click',function(){
  	$('.navigation').removeClass('visible');  
	$('.navigation').toggleClass('visible bt-menu-open');
	  
	  
  })

//==============Navigation function
$('.navigation li').on('click',function(){
			var $nav = $('.navigation li')
			var dataId = $(this).data('id');
			$('#main-content .lower-page').removeClass('off current');
			$('.on').addClass('off');
			$('#main-content .lower-page').removeClass('on');
			$('#'+ dataId).addClass('current on');
			$nav.removeClass('active');
			$(this).addClass('active');
		setTimeout(function(){
			$('.off').removeClass('off');
		},500)
		if($(window).width()<=767){
			$('.is-active').removeClass('is-active');
			$('.bt-menu-open').removeClass('bt-menu-open');
		}
		})
		
		$('.nav-btn').on('click',function(){
			var $nav = $('.navigation li')
			var this_class = $(this).attr('data-id');
			var class_name = ('.'+ this_class+'-nav');
			var dataId = $(this).data('id');
			$('#main-content .lower-page').removeClass('off current');
			$('.on').addClass('off');
			$('#main-content .lower-page').removeClass('on');
			$('#'+ dataId).addClass('current on');
			$nav.removeClass('active');
			$('.navigation').find(class_name).addClass('active');
			//===open navigation
			$('.navigation').addClass('visible');
	   		$('.navigation').animate({
		   bottom:0
	   })  
	  
		setTimeout(function(){
			$('.off').removeClass('off');
		},500)	
		})

	//============CountDown Function===============
$('#clock').countdown('2018/03/10 12:00:00').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<div><span>%-w</span>week%!w</div>'
    + '<div><span>%-d</span>day%!d</div>'
    + '<div><span>%H</span>hr</div>'
    + '<div><span>%M</span>min</div>'
    + '<div><span>%S</span>sec</div>'));
});

$("#service-carousel").owlCarousel({
		 loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        900:{
            items:2
        },
        
         1024:{
            items:3
        }
        
    },
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		
	})

// VIDEO JS	
if($('#bgndVideo').length){
	myPlayer = jQuery("#bgndVideo").YTPlayer();
	
	 } 
if($('#star-box').length){	          
  var options = {
        effectWeight: 1.5,
        outerBuffer: 1.30,
        elementDepth: 100,
        smoothingMultiplier: 1.5,
        directions: [ 1, 1, -1, 1, 1, 1, 1, 1 ]
    };
    $("#star-box").logosDistort(options); 
 }         
$(window).load(function(){
	$('#loader-section').delay(1000).fadeOut(500);
})
	
})(jQuery);