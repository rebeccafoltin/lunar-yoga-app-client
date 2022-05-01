// ui functions

// write functions here
// const onSignInSuccess ect, jquery selectors

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p> Sign up Sucessful </p>')
  $('form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#auth-display').html('<p>Sign Up Failure </p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p> Sign up Successful</p>')
  $('form').trigger('reset')
  store.user = response.user
  $('#sign-out-butt').show()
  $('#change-password-form').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}
const onSignInFailure = function () {
  $('#auth-display').html('<p>Sign In Failed</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>Signed Out Successfully</p>')
  $('form').trigger('reset')
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#sign-out-butt').hide()
  $('#change-password-form').hide()
}
const onSignOutFailure = function () {
  $('#auth-display').html('<p> Sign Out Failure!! </p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>Password Change Successful </p>')
  $('form').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Password Change Failure!! </p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}