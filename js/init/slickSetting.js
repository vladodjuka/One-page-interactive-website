$('#demo').slick({
  speed: 300,
  infinite: true,
  autoplay: true
});

$('#rote').slick({
  speed: 300,
  infinite: true,
  autoplay: true,
  fade: true,
  pauseOnDotsHover: true,
  dots: true,
  appendDots: $(".ovdje"),
  cssEase: 'linear'
});

$('#rote').on('beforeChange', function(event, slide, index, currentSlide){
    $("#change").toggleClass($("#change").attr('class')+" "+$(slide.$slides.get(currentSlide)).attr('title'));
});