
//Social API Vars
var twitterAPI = $('#twitter');
var instagramAPI = $('#instagram');
var rdioAPI = $('#rdio');
var readmillAPI = $('#readmill');
var twitterID = twitterAPI.prop('id');
var instagramID = instagramAPI.prop('id');
var rdioID = instagramAPI.prop('id');
var readmillID = readmillAPI.prop('id');

$('#readmill').prepend('<div><p id="readmill-book">Currently Reading: Helvetica/ Objectified/ Urbanized: The Complete Interviews</p></div>');

LastFMStatus.init({
    username: "mrathee"
});

// This adds the logo spans which are targetted with symbolset. It is called in api.twitter.js after twitter.html();
function logofyAPI(){
  setTimeout(function(){
    if (instagramActive){
      $(".social-api").prepend('<span class="ss-icon ss-social logo"></span>');
      twitterAPI.find('span.logo').prepend(twitterID);
      instagramAPI.find('span.logo').prepend(instagramID);
      // rdioAPI.find('span.logo').prepend(rdioID);
      readmillAPI.find('span.logo').prepend(readmillID);
      centerAPI();
      activateAPI();
    }
    else{
    	return;
    }
  }, 1000);
}

// Callback function for after API js has run to display the API containers
function activateAPI(){
	$('.social-api').addClass("run");
  trackEvent('home','api bar','init');
  $(".social-api").delay(4500).queue(function(next){
    $(this).addClass('inactive');
    next();
  });
}


function centerAPI(){
  var socialAPI = $('.social-api');
  if ($(window).width() > 768){
    $(socialAPI).each(function() {
        var center = $(this).find('div');
        var h = center.height();
        center.css('margin-top', + h / -2 + 'px');
    });
  }
}

$(window).resize(function() {
  centerAPI();
});

centerAPI();

// Nav Hover
function checkWidth() {
	if ($(window).width() > 769){
		$('#portfolio').hover(function(){
			$('#current, .copy, .dark-shade').addClass('fade');
      trackEvent('global','portfolio sub menu','opened');
		}, function(){
			$('#current, .copy, .dark-shade').removeClass('fade');
      trackEvent('global','portfolio sub menu','closed');
		});
	}
	else{
		$('.copy').removeClass('fade');
	}
};

$(window).resize(function() {
	checkWidth();
});
checkWidth();



// Mobile Nav
var navHook = $('#nav');
var navMenu = $('#navigation');
var body = $('body');

navHook.click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if (body.hasClass('nav')) {
    body.removeClass('nav');
    trackEvent('global','mobile menu','closed');
 	} else {
		body.addClass('nav');
    trackEvent('global','mobile menu','opened');
 	}
});

navMenu.click(function(e){
	e.stopPropagation();
});

$(document).click(function() {
   if (body.hasClass('nav')){
	   body.removeClass('nav');
   }
});



// Konami Code
// konami = new Konami()
// konami.code = function() {
//     $('body').addClass('konami');
// }
// konami.load()

//Slider
var slider = $('.flexslider');
if (slider) {
  $('.flexslider').flexslider();
}

// ScrollTop Function
var toTop = $('#top');
toTop.click(function(e) {
	e.preventDefault();
	$('body,html').animate({scrollTop:0},800);
  trackEvent('global','back to top link','page: ' + location.pathname);
});


//Counter
var countNumberValue;
function startCount() {
  $('.count').each(function() {
    countNumberValue = $(this).attr('data-number');
    $(this).countTo({
        from: 0,
        to: countNumberValue,
        speed: 1400,
        refreshInterval: 5,
        onComplete: function(value) {
        }
    });
  });
}
// startCount();

var eventsFired = 0;
$(window).scroll(function() {
  var elem = $('#about-data');
  withinViewport(elem);
  if ($("#about-data").is(":within-viewport")){
	  if (eventsFired == 0) {
  		startCount();
  		eventsFired++;
      trackEvent('about','element watcher','stats-view');
  	}
  }
});


// Twitter Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
