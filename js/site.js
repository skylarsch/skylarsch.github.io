$(document).ready(function(){
  if (window.chrome !== undefined) {
    $(window).scroll(function(){
      var offset = $(document).scrollTop();
      var height = parseInt($('div.header_image').css('height'));
      var max_offset = height;
      var max_paralax = 200;
      var percent = offset / max_offset;
      if (percent < 0) {
        percent = 0.0;
      }
      if (percent > 1.0) {
        percent = 1.0;
      }
      var paralax = max_paralax * percent;
      var saturate = 100 - (100 * percent);
      $('div#paralax_header').css('top', -paralax + 'px');
      $('div#paralax_header').css('-webkit-filter', 'saturate(' + saturate + '%)');
    });
  }
});