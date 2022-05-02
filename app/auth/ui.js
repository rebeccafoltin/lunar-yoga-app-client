'use strict'

// write functions here
// const onSignInSuccess ect, jquery selectors

const store = require('../store.js')

const onSignUpSuccess = function () {
    $('#auth-display').html('<p>User signed up successfully</p>')

    $('form').trigger('reset')
}

const onSignUpFailure = function () {
    $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
    $('#auth-display').html('<p>User signed in successfully</p>')

    // reset all forms
    $('form').trigger('reset')

    console.log(response)
    // store data from the response in my store object
    store.user = response.user
}

const onSignInFailure = function () {
    $('#auth-display').html('<p>Error while signing in</p>')
}

const onChangePasswordSuccess = function () {
    $('#auth-display').html('<p>User changed password successfully</p>')

    $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
    $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
    $('#auth-display').html('<p>User signed out successfully</p>')

    $('form').trigger('reset')
}

const onSignOutFailure = function () {
    $('#auth-display').html('<p>Error while signing out</p>')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onChangePasswordSuccess,
    onChangePasswordFailure,
    onSignOutSuccess,
    onSignOutFailure
}