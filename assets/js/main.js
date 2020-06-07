$(document).ready(function () {
  $(".search-icon").click(function (e) {
    e.preventDefault();
    $("form").slideToggle("show");
  });

  $(".side-menu-icon").click(function(e){
    e.preventDefault();
    $(".side-menu").addClass("open")
  });

  $(".close-side").click(function(e){
    e.preventDefault();
    $(".side-menu").removeClass("open")
  });
});
