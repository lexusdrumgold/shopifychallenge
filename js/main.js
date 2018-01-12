$(document).ready(function() {

/* Returns true or false, depending whether or not testEmail (a string),
is a valid email */
function isEmail(testEmail) {
  var emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return emailPattern.test(testEmail.toLowerCase());
}

/* Checks the email input and determines whether or not to display
the warning message */
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

/* Checks the email input when the user clicks onto the input */
$('#userEmail').keyup(function() {
  validate();
});

/* Checks the email input when the user clicks off the input */
$('#userEmail').blur(function() {
  validate();
});

/* Determines whether or not to clear the email input */
var clicks = 0;
$('#userEmail').click(function() {
  clicks++;
  if (clicks == 1) {
      $(this).val("");
  }
});

/* Checks the email input when the user clicks submit */
$('#submitBtn').click(function(e) {
  e.preventDefault();
  validate();
});



});
