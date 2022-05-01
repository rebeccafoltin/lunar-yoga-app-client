'use strict'

// actual event functions 
// begin promise chain

const getFormFields = require('../../lib/get-form-fields.js')

const authApi = require('./api.js')
const authUi = require('./ui.js')


const onSignUp = function (event) {
    event.preventDefault()
    console.log(event)
    // get form data
    const form = event.target
    const data = getFormFields(form)
    authApi
        .signUp(data)
        .then(() => authUi.onSignUpSuccess)
        .catch(() => authUi.onSignUpFailure())
    console.log(authApi.signUp)
}
authUi.onSignUpSuccess()

const onSignIn = function (event) {
    event.preventDefault()
    console.log(event)
    // get form data
    const form = event.target
    const data = getFormFields(form)
    authApi
        .signIn(data)
        .then(() => authUi.onSignInSuccess)
        .catch(() => authUi.onSignInFailure())
    console.log(authApi.signIn)
}
authUi.onSignInSuccess()

const onChangePassword = function (event) {
    event.preventDefault()
    console.log(event)
    // get form data
    const form = event.target
    const data = getFormFields(form)
    authApi
        .changePassword(data)
        .then(() => authUi.onChangePasswordSuccess)
        .catch(() => authUi.onChangePasswordFailure())
    console.log(authApi.changePassword)
}
authUi.onChangePasswordSuccess()

const onSignOut = function (event) {
    event.preventDefault()
    console.log(event)
    // get form data
    const form = event.target
    const data = getFormFields(form)
    authApi
        .signOut(data)
        .then(() => authUi.onSignOutSuccess)
        .catch(() => authUi.onSignOutFailure())
    console.log(authApi.signOut)
}
authUi.onSignOutSuccess()

module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut,
}