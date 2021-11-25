(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

//var allPortals = $(".portal");
var allPortals = $(".portal-row");
var allTestimonials = $(".testimonial");
var testimonialQuote = $(".testimonial .image-overlay .inner");
var eventsList = $(".events__list .events-item");

allPortals.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});
allTestimonials.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});
testimonialQuote.each(function(i,el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});
eventsList.each(function(i,el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});


win.scroll(function(event) {


  allPortals.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  allTestimonials.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      //el.addClass("come-in-from-left");
      //el.addClass("come-in-large");
      el.addClass("come-in");
    } 
  });
  testimonialQuote.each(function(i, el){
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("testimonial-quote-slide")
    }
  });
  eventsList.each(function(i, el){
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("events-list-slide")
    }
  });
  
});

// header menu start 
const body = document.body;
const triggerMenu = document.querySelector(".header");
const nav = document.querySelector(".header");
//const menu = document.querySelector(".header .inner");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

//triggerMenu.addEventListener("click", () => {
//  body.classList.toggle("menu-open");
//});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }
  
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});
// header menu end
