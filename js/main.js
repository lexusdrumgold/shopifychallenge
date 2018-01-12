$(document).ready(function() {

function isEmail(testEmail) {
  var emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return emailPattern.test(testEmail.toLowerCase());
}

function validate() {
  var formEmail = $('#userEmail').val();
  if (isEmail(formEmail) === false) {
    $('.warning').css('opacity', 1);
  } else {
    $('.warning').css('opacity', 0);
    var userChoice = $('#dropdown').val();
    console.log("User with email: " + formEmail + " is interested in " + userChoice);
  }
}

$('#userEmail').keyup(function() {
  validate();
});

$('#userEmail').blur(function() {
  validate();
});

var clicks = 0;
$('#userEmail').click(function() {
  clicks++;
  if (clicks == 1) {
      $(this).val("");
  }
});

$('#submitBtn').click(function(e) {
  e.preventDefault();
  validate();
});



});
