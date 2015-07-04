$(document).ready(function(){
  load_header_image();
  bind_to_contact();
  bind_to_post_image();
});

function bind_to_contact() {
  $('i._email').hover(function(){
    $('div.email').css('color', _contact_hover_color());
  }, _reset_contact_hover);
  $('i._twitter').hover(function(){
    $('div.twitter').css('color', _contact_hover_color());
  }, _reset_contact_hover);
  $('i._github').hover(function(){
    $('div.github').css('color', _contact_hover_color());
  }, _reset_contact_hover);
  $('i._blog').hover(function(){
    $('div.blog').css('color', _contact_hover_color());
  }, _reset_contact_hover);
}
function _reset_contact_hover() {
  $('div.letter').css('color', '#000');
}
function _contact_hover_color() {
  return '#4D9FFC';
}

// performs the paralx scroll for the image header
function perform_paralax_scroll() {
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
    '/images/headers/san-diego-blur.jpg',
    '/images/headers/boats-blur.jpg',
    '/images/headers/bridge-blur.jpg'
  ];

  var url_string = 'url("' + urls[Math.floor(Math.random()*urls.length)] + '")';
  $('div.header_image').css('background-image', url_string);
}

function bind_to_post_image() {
  $(".post img").click(function(evt) {
    show_full_screen_image($(this).attr('src'));
  });
}

function show_full_screen_image(src) {
  if (src.match(/^http(s??):\/\/(i\.)??imgur\.com\/(.*?)\.gif$/im)) {
    window.location.href = src + 'v';
  } else if (src.match('^http(s?)://')) {
    window.location.href = src;
  } else {
    window.location.href = window.location.origin + src
  }
}
