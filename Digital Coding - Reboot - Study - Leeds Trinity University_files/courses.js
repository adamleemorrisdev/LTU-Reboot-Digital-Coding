$(document).ready(function () {
  var $btns = $(".btn").click(function () {
    if (this.id == "all") {
      //$('#parent > div').fadeIn(450);
      //$('#parent > ol > li').fadeIn(450);
      $("#search-results > li").fadeIn(450);
    } else {
      var $el = $("." + this.id).fadeIn(450);
      //$('#parent > div').not($el).hide();
      //$('#parent > ol > li').not($el).hide();
      $("#search-results > li").not($el).hide();
    }
    $btns.removeClass("active");
    $(this).addClass("active");
  });

  var $search = $("#search-courses").on("input", function () {
    $btns.removeClass("active");
    var matcher = new RegExp($(this).val(), "gi");
    //$('.box').show().not(function(){
    //$(this).find(".courseTitle, .courseSubjectXX, .courseMode, .courseYear").text()
    $(".result")
      .show()
      .not(function () {
        return matcher.test($(this).find("*").text());
      })
      .hide();
  });
});

(function (d) {
"use strict";
var widgetScript = d.createElement("script");
widgetScript.id = "unistats-widget-script";
widgetScript.src = "//discoveruni.gov.uk/widget/embed-script";
var scriptTags = d.getElementsByTagName("script")[0];
if (d.getElementById("unistats-widget-script")) {
return;
}
scriptTags.parentNode.insertBefore(widgetScript, scriptTags);
})(document);