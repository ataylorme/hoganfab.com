/* WINDOW SIZE CONDITIONALS */
if(!window.getComputedStyle){window.getComputedStyle=function(e){this.el=e;this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;if(t==="float"){t="styleFloat"}if(n.test(t)){t=t.replace(n,function(){return arguments[2].toUpperCase()})}return e.currentStyle[t]?e.currentStyle[t]:null};return this}}

var window_size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

/* DESKTOP MOBILE CLASSES */
function desktop_mobile_classes() {
  var window_size = window.getComputedStyle(document.body,':after').getPropertyValue('content').replace(/"/g, "");
  if ( window_size === 'mobile' ) {
    if ( jQuery('body').hasClass('desktop') ) {
      jQuery('body').removeClass('desktop');
    }
    if ( jQuery('body').hasClass('portrait') ) {
      jQuery('body').removeClass('portrait');
    }
    if ( jQuery('body').hasClass('landscape') ) {
      jQuery('body').removeClass('landscape');
    }
    jQuery('body').addClass('mobile');
  }
  else if ( window_size === 'portrait' ) {
    if ( jQuery('body').hasClass('desktop') ) {
      jQuery('body').removeClass('desktop');
    }
    if ( jQuery('body').hasClass('mobile') ) {
      jQuery('body').removeClass('mobile');
    }
    if ( jQuery('body').hasClass('landscape') ) {
      jQuery('body').removeClass('landscape');
    }
    jQuery('body').addClass('portrait');
  }
  else if ( window_size === 'landscape' ) {
    if ( jQuery('body').hasClass('desktop') ) {
      jQuery('body').removeClass('desktop');
    }
    if ( jQuery('body').hasClass('mobile') ) {
      jQuery('body').removeClass('mobile');
    }
    if ( jQuery('body').hasClass('portrait') ) {
      jQuery('body').removeClass('portrait');
    }
    jQuery('body').addClass('landscape');
  }
  else if( window_size === 'desktop' ) {
    if ( jQuery('body').hasClass('landscape') ) {
      jQuery('body').removeClass('landscape');
    }
    if ( jQuery('body').hasClass('mobile') ) {
      jQuery('body').removeClass('mobile');
    }
    if ( jQuery('body').hasClass('portrait') ) {
      jQuery('body').removeClass('portrait');
    }
    jQuery('body').addClass('desktop');
  }
}//desktop_mobile_classes

desktop_mobile_classes();
jQuery(window).resize(function(){
  desktop_mobile_classes();
});

jQuery(document).ready(function($) {

  /* MENU TOGGLE */
  $('#menu a.nav-toggle').click(function(e){
    e.preventDefault();
    $('body').toggleClass('nav-active');
  });
  
  /* PLACEHOLDER SUPPORT */
  //https://github.com/mathiasbynens/jquery-placeholder/
  //check if placeholder support exists
  var placeholderSupport = "placeholder" in document.createElement("input");
  //if placeholder support does not exist
  if ( placeholderSupport === false ) {
    //load placeholder support script and initialize
    $.getScript( "vendors/jquery/placeholder/2.0.7/jquery.placeholder.min.js" ).done(function(){$('input, textarea').placeholder();});
  }
  
  /* STELLAR PARRALAX */
  if ( $('body').hasClass('desktop') ) {
    $.getScript( "vendors/jquery/stellar/0.6.2/stellar.min.js" ).done(function(){
      console.log('stellar loaded');
      $.stellar({
	// Set scrolling to be in either one or both directions
	horizontalScrolling: false,
	verticalScrolling: true,
      
	// Set the global alignment offsets
	horizontalOffset: 0,
	verticalOffset: 0,
      
	// Refreshes parallax content on window load and resize
	responsive: true,
      
	// Select which property is used to position elements.
	// Choose between 'position' or 'transform',
	// or write your own 'positionProperty' plugin.
	positionProperty: 'transform',
      
	// Enable or disable the two types of parallax
	parallaxBackgrounds: true,
	parallaxElements: false,
      });
    });
  }
  
  /* SMOOTH ANCHOR SCROLLING */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function(e) {
      $('body').removeClass('nav-active');
      e.preventDefault();
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	if (target.length) {
	  var offSet = target.offset().top - 25;
	  $('html,body').animate({
	    scrollTop: offSet
	  }, 1000);
	}
      }
    });
  });
  
});//end doc ready