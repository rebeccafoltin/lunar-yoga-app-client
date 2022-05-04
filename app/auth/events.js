'use strict'

// define event handlers functions 
// begin promise chain
// get form data
// events.js requires api.js and ui.js
// const store = require('./store.js')

const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')


const onSignUp = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    authApi
        .signUp(data)
        .then(() => authUi.onSignUpSuccess())
        .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    authApi
        .signIn(data)
        .then((response) => authUi.onSignInSuccess(response))
        // response bc token
        .catch(() => authUi.onSignInFailure())
}

const onChangePassword = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    authApi
        .changePassword(data)
        .then(() => authUi.onChangePasswordSuccess())
        .catch(() => authUi.onChangePasswordFailure())
}

const onSignOut = function (event) {
    event.preventDefault()
    authApi
        .signOut()
        .then(() => authUi.onSignOutSuccess())
        .catch(() => authUi.onSignOutFailure())
}

const onYogaCreate = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    authApi
        .yogaCreate(data)
        .then(() => authUi.onYogaCreateSuccess())
        .catch(() => authUi.onYogaCreateFailure())
}

const onYogaDestroy = function (event) {
    event.preventDefault()
    const form = event.target
    const id = getFormFields(event.target).yoga.id
    authApi
        .yogaDestroy(id)
        .then((response) => authUi.onYogaDestroySuccess(response))
        .catch(() => authUi.onYogaDestroyFailure())
}

const onYogaIndex = function (event) {
    event.preventDefault()
    authApi
        .yogaIndex()
        .then((response) => authUi.onYogaIndexSuccess(response))
        .catch(() => authUi.onYogaIndexFailure())
}

const onYogaShow = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    authApi
        .yogaShow(data)
        .then(() => authUi.onYogaShowSuccess())
        .catch(() => authUi.onYogaShowFailure())
}

const onYogaUpdate = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    const id = data.yoga._id
    authApi
        .yogaUpdate(id, data)
        .then(() => authUi.onYogaUpdateSuccess())
        .catch(() => authUi.onYogaUpdateFailure())
}


module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut,
    onYogaCreate,
    onYogaDestroy,
    onYogaIndex,
    onYogaShow,
    onYogaUpdate
}