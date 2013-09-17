$(document).ready(function(){
  load_header_image();

  $(window).scroll(perform_paralx_scroll);
});


// performs the paralx scroll for the image header
function perform_paralx_scroll() {
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
  $('div#paralax_header').css('top', -paralax + 'px');
  if (window.chrome !== undefined) {
    var saturate = 100 - (100 * percent);
    $('div#paralax_header').css('-webkit-filter', 'saturate(' + saturate + '%)');
  }
}

function load_header_image() {
  console.log('loading header image');
  var urls = [
    'http://skylarsch.com.s3.amazonaws.com/images/san-diego.jpg',
    'http://skylarsch.com.s3.amazonaws.com/images/boats.jpg',
    'http://skylarsch.com.s3.amazonaws.com/images/bridge.jpg'
  ];

  var url_string = 'url("' + urls[Math.floor(Math.random()*urls.length)] + '")';
  $('div.header_image').css('background-image', url_string);
}