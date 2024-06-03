// $(".carousel .carousel-item").each(function () {
//   var minPerSlide = 5;
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(":first");
//   }
//   next.children(":first-child").clone().appendTo($(this));

//   for (var i = 0; i < minPerSlide; i++) {
//     next = next.next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next.children(":first-child").clone().appendTo($(this));
//   }
// });

// $(document).ready(function () {
//   $(".lazy").slick({
//     lazyLoad: "ondemand",
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   });
// });

// $(document).ready(function () {
//   $(".slick-carousel1").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   });
// });

// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 100000
// })
$(document).ready(function () {
  $(".slider-1").slick({
    lazyLoad: "ondemand",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow:
      '<span class="prev-arrow"><i class="fa-solid fa-circle-chevron-left fa-3x"></i></span>',
    nextArrow:
      '<span class="next-arrow"><i class="fa-solid fa-circle-chevron-right fa-3x"></i></span>',
  });
  $(".slider-2").slick({
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow:
      '<span class="prev-arrow"><i class="fa-solid fa-circle-chevron-left fa-3x"></i></span>',
    nextArrow:
      '<span class="next-arrow"><i class="fa-solid fa-circle-chevron-right fa-3x"></i></span>',
  });
  $(".carousel-1").slick({
    dots: true,
    prevArrow:
      '<span class="prev-arrow"><i class="fa-solid fa-circle-chevron-left fa-3x"></i></span>',
    nextArrow:
      '<span class="next-arrow"><i class="fa-solid fa-circle-chevron-right fa-3x"></i></span>',
  });
});
