$(document).ready(function () {
  // open menu
  $(".open-menu").click(function () {
    $(".primary-nav").addClass("active");
  });
  // close menu
  $(".close-menu, .primary-nav").click(function () {
    $(".primary-nav").removeClass("active");
  });
  $(" .primary-nav ul").click(function (e) {
    e.stopPropagation();
  });
  // custom tabs

  $(".custom-tabs .tab-list li").click(function () {
    let getId = $(this).attr("data-target");
    $(this).parents(".custom-tabs").find(" .tab-list li").removeClass("active");
    $(this).addClass("active");
    $(this).parents(".custom-tabs").find(".tab-content").removeClass("active");
    $(getId).addClass("active");
  });

  // banner slider -----------------
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
      speed: 300
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
 
    speed: 300,
    prevArrow: $(".banner-left .custom-controls .prev"),
    nextArrow: $(".banner-left .custom-controls .next"),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          vertical: false,
          centerMode: true,
         
         
        }
      },

      {
        breakpoint: 767,
        settings: {
          arrows: false,
          vertical: false,
          centerMode: true,
          slidesToShow: 2,
         
        }
      },
      {
        breakpoint: 567,
        settings: {
          arrows: false,
          vertical: false,
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  // fixed header on scroll
  // show/hide nav  header on page load

  fixedHeader();

  $(window).scroll(function () {
    // show/hide header on scroll
    fixedHeader();
  });

  function fixedHeader() {
    if ($(document).scrollTop() > 50) {
      $("#Header").addClass("shrink bg-white shadow-sm");
    } else {
      $("#Header").removeClass("shrink bg-white shadow-sm");
    }
  }

  // bottom to top scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  var window_width = $(window).width();
  function mobile_tabs() {
    $(".active-tab-indicator").click(function () {
      $(this).next(".tab-list").slideToggle(100);
    });

    $(".custom-tabs .tab-list li ").click(function () {
      var tab_text = $(this).text();

      $(this)
        .closest(".tab-list")
        .prev(".active-tab-indicator")
        .find(".text")
        .empty()
        .append(tab_text);
      $(this).closest(".custom-tabs .tab-list").slideUp(100);
    });
  }

  //  wow  animate iniate
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  });
  wow.init();

  if (window_width < 767) {
    mobile_tabs();
  }
});
