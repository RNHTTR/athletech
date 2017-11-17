
$(document).ready(function() {
  var jumboHeight = $('.jumbotron').outerHeight();
  function parallax(){
      var scrolled = $(window).scrollTop();
      $('.bg').css('height', (jumboHeight-scrolled) + 'px');
  }

  $(window).scroll(function(e){
      parallax();
  });

  function resize() {
    var n = $("body").width() / 25 + "pt";
    $("h1").css('fontSize', n);
  }
  $(window).on("resize", resize);
  $(document).ready(resize);
});
