$(document).ready(function(){
  bind_to_post_image();
});

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
    window.location.href = window.location.origin + src;
  }
}
