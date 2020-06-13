$(document).ready(function () {
  $(window).on("load", function () {
    $(".img-loader").fadeOut("hide");
  });

  // Navbar Second//
  if ($("#navbar").hasClass("navbar-second")) {
    $("#navbar").css({
      "box-shadow": "none",
      "border-bottom": "1px solid rgba(255, 255, 255, 0.1)",
      "background-color": "transparent",
    });
  }

  if (window.scrollY > 0) {
    if ($("#navbar").hasClass("navbar-second")) {
      $("#navbar")
        .removeClass("navbar-second")
        .addClass("navbar-second-move")
        .css({
          "box-shadow": "0 8px 25px 0 rgba(0, 0, 0, 0.04)",
          "border-bottom": "none",
          "background-color": "#ffffff",
        });
    }
  }
  // ----- //

  // Navbar move //
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 0) {
      $("#navbar").addClass("fixed fadeInDown");
      if ($("#navbar").hasClass("navbar-second")) {
        $("#navbar")
          .removeClass("navbar-second")
          .addClass("navbar-second-move")
          .css({
            "box-shadow": "0 8px 25px 0 rgba(0, 0, 0, 0.04)",
            "border-bottom": "none",
            "background-color": "#ffffff",
          });
      }
    } else {
      $("#navbar").removeClass("fixed fadeInDown");
      if ($("#navbar").hasClass("navbar-second-move")) {
        $("#navbar")
          .removeClass("navbar-second-move")
          .addClass("navbar-second")
          .css({
            "box-shadow": "none",
            "border-bottom": "1px solid rgba(255, 255, 255, 0.1)",
            "background-color": "transparent",
          });
      }
    }
  });
  // ----- //

  // Navbar Search //
  if ($(".search-click").length) {
    $(".search-click").click(function (e) {
      e.preventDefault();
      $("form").slideToggle("show");
    });
  }
  // ----- //

  // Side menu //
  if ($(".side-menu-icon").length) {
    $(".side-menu-icon").click(function (e) {
      e.preventDefault();
      $(".side-menu").addClass("open");
      $("body").css("overflow", "hidden");
    });
  }

  if ($(".close-side").length) {
    $(".close-side").click(function (e) {
      e.preventDefault();
      $("body").css("overflow", "scroll");
      $(".side-menu").removeClass("open");
    });
  }
  // ----- //

  // Navbar responsive //
  $(".navbar-toggler").click(function () {
    if ($(".navbar-toggler-icon").hasClass("fa-bars")) {
      $("body").css("overflow", "hidden");
      $(".navbar-toggler-icon").removeClass("fa-bars").addClass("fa-times");
    } else {
      $(".navbar-toggler-icon").removeClass("fa-times").addClass("fa-bars");
      $("body").css("overflow", "scroll");
      $(".dropdown").find(".hover-menu").slideUp();
    }
  });

  if ($(window).width() <= 991.98) {
    $(".nav-link").click(function (e) {
      e.preventDefault();
      $(this).parent().siblings().find(".hover-menu").slideUp();
      $(this).parent().find(".hover-menu").slideToggle("slow");
    });
  }
  // -----//

  // Owl carousel 2//
  if ($(".slider .owl-carousel").length) {
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
  }

  if ($("#services-slider .owl-carousel").length) {
    $("#services-slider .owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
  // ----- //

  // Tabs header
  if ($(".tabs-header").length) {
    $(".tabs-header a").click(function (e) {
      e.preventDefault();
      let href = $(this).attr("href");

      $(this).parent().siblings().children().removeClass("active");
      $(this).addClass("active");

      if ($(href).hasClass("animate__fadeIn")) {
        return;
      }

      $(href).siblings().removeClass("animate__fadeIn").addClass("hide");
      $(href).removeClass("hide").addClass("animate__fadeIn");
    });
  }
  // ----- //

  // Accordion close icon change//
  if ($(".accordion-click").length) {
    $(".accordion-click").click(function () {
      if ($(this).children().hasClass("fa-eye-slash")) {
        $(".accordion-click")
          .find(".fa-eye")
          .removeClass("fa-eye")
          .addClass("fa-eye-slash");
        $(this).children().removeClass("fa-eye-slash").addClass("fa-eye");
      } else {
        $(this).children().removeClass("fa-eye").addClass("fa-eye-slash");
      }
    });
  }
  // ----- //

  // countTo.js and move-start
  if ($("#fun-factor-area").length) {
    $(window).scroll(function (e) {
      if ($(window).scrollTop() >= 1900) {
        if ($("#fun-factor-area").hasClass("start")) {
          $(".timer").countTo();
          $("#fun-factor-area").removeClass("start");
        }
      }
    });
  }
  // ----- //

  // wow.js //
  function wowAnimation() {
    wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 0, // default
      mobile: true, // default
      live: true, // default
    });
    wow.init();
  }
  // ----- //

  $(window).on("load", function () {
    wowAnimation();
  });
});

$(window).on("load", function () {
  $(".img-loader").fadeOut("slow");
});
