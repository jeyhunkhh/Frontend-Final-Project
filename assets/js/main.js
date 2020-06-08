$(document).ready(function () {
  // Search //
  $(".search-icon").click(function (e) {
    e.preventDefault();
    $("form").slideToggle("show");
  });
  // ----- //

  // Side menu //
  $(".side-menu-icon").click(function (e) {
    e.preventDefault();
    $(".side-menu").addClass("open");
  });

  $(".close-side").click(function (e) {
    e.preventDefault();
    $(".side-menu").removeClass("open");
  });
  // ----- //

  // Owl carousel 2//
  $(".slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    dotsEach: 1,
    responsive: {
      0: {
        items: 1,
      },
      1024: {
        items: 1.5,
      },
    },
  });
  // ----- //
  
  $(".tabs-header a").click(function(e){
    e.preventDefault();
    let href= $(this).attr("href");

    $(this).parent().siblings().children().removeClass("active");
    $(this).addClass("active");

    if($(href).hasClass("animate__fadeIn")){
      return;
    };

    $(href).siblings().removeClass("animate__fadeIn").addClass("hide");
    $(href).removeClass("hide").addClass("animate__fadeIn");
        
  })

  // wow.js //
  function wowAnimation() {
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();
  };
  // ----- //
  
  $(window).on("load", function(){
    wowAnimation();
  })
});
