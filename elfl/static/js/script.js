$(document).ready(function() {
  var loader = $('.loader');
  var content = $('.content');

  $('.collapse-button').click(function() {
    content.slideToggle('slow');
  });
  $(window).on('load', function() {
    loader.hide();
  });
});
