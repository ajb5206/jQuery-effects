$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
    $("#lion-showing").toggle();
    $("#lion-hidden").toggle();
  })
});