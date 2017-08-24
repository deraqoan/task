function g(el) { return document.getElementById(el); }
$('#shown').click(function() {
  $('#modalExample').show();
  $('#modal-wrapper').fadeIn(5000);
});
$('#modalExample #hide #hideT').click(function() {
  $('#modalExample').hide();
  $('#modal-wrapper').hide();
});

