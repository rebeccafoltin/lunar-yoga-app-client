'use strict'

// write functions here that modify the page
// const onSignInSuccess ect, jquery selectors
// ui.js requires the store object which shares data between files
// ui modifies the elements on the page defined by index.html

const store = require('../store.js')

// USER AUTHENTICATION

//<!---SIGN UP---->

const onSignUpSuccess = function () {
    $('#auth-display').html('<p>User signed up successfully</p>')
    $('form').trigger('reset')
}

const onSignUpFailure = function () {
    $('#auth-display').html('<p>Error while signing up</p>')
}

//<!---SIGN IN---->

const onSignInSuccess = function (response) {
    $('#auth-display').html('<p>User signed in successfully</p>')
    $('.signed-in').show()
    $('.not-signed-in').hide()
    $('form').trigger('reset')
    store.user = response.user
}

const onSignInFailure = function () {
    $('#auth-display').html('<p>Error while signing in</p>')
}

//<!---CHANGE PASSWORD---->

const onChangePasswordSuccess = function () {
    $('#auth-display').html('<p>User changed password successfully</p>')
    $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
    $('#auth-display').html('<p>Error while changing password</p>')
}

//<!---SIGN OUT---->

const onSignOutSuccess = function () {
    $('#auth-display').html('<p>User signed out successfully</p>')
    store.user = null
    $('form').trigger('reset')
    $('.not-signed-in').show()
    $('.signed-in').hide()
}

const onSignOutFailure = function () {
    $('#auth-display').html('<p>Error while signing out</p>')
}


// C R U D USER RESOURCES

//<!---CREATE---->

const onYogaCreateSuccess = function (response) {
    $('#auth-display').html('<p>Yoga created sucessfully</p>')

    // reset all forms
    $('form').trigger('reset')

    // store data from the response in my store object
}

const onYogaCreateFailure = function (response) {
    $('#auth-display').html('<p> Yoga updated successfully</p>')

    // reset all forms
    $('form').trigger('reset')

    // store data from the response in my store object
}

//<!---INDEX ALL RESOURCES ------>

const yogaHTML = function (yoga) {
    return (`
    <div class="yogaUIfunction">
        <p>ID:${yoga._id}</p> 
        <p> Name: ${yoga.yogaName} </p>
        <p> Style: ${yoga.yogaStyle} </p>
        <p> Emotion: ${yoga.yogaEmotion} </p>
        <p> Date: ${yoga.yogaDate} </p>
        </div>
    `)
}

const onYogaIndexSuccess = function (response) {
    const yogas = response.yogas
    let namaste = ""
    yogas.forEach(yoga => {
        namaste +=(yogaHTML(yoga))
    })
    $('#yoga-box').html(namaste)
    $('#auth-display').html('<p> Yoga indexed successfully</p>')

    // reset all forms
    $('form').trigger('reset')

    // store data from the response in my store object
}

const onYogaIndexFailure = function (response) {
    $('#auth-display').html('<p> Yoga updated successfully</p>')

    // reset all forms
    $('form').trigger('reset')

    // store data from the response in my store object
}

//<!---SHOW ONE RESOURCE---->

const onYogaShowSuccess = function (response) {
    const yogas = response.yogas
    $('#auth-display').html(yogaInfoHtml(yoga))
    $('form').trigger('reset')

}

const onYogaShowFailure = function (response) {
    $('#auth-display').html('<p> Yoga show failure </p>')
    $('form').trigger('reset')

}

//<!---UPDATE RESOURCES ---->

const onYogaUpdateSuccess = function () {
    $('#auth-display').html('<p> Yoga updated successfully</p>')
    $('form').trigger('reset')

}

const onYogaUpdateFailure = function (response) {
    $('#auth-display').html('<p> Yoga updated successfully</p>')
    $('form').trigger('reset')
}

//<!---DESTROY RESOURCES ---->

const onYogaDestroySuccess = function () {

    $('#auth-display').html('<p> Yoga destroyed successfully</p>')
    $('form').trigger('reset')

}

const onYogaDestroyFailure = function (response) {
    $('#auth-display').html('<p> Yoga destroy Failure </p>')

}


//<!-- MODULE EXPORTS--->

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onChangePasswordSuccess,
    onChangePasswordFailure,
    onSignOutSuccess,
    onSignOutFailure,
    onYogaCreateSuccess,
    onYogaDestroySuccess,
    onYogaIndexSuccess,
    onYogaShowSuccess,
    onYogaUpdateSuccess,
    onYogaCreateFailure,
    onYogaDestroyFailure,
    onYogaIndexFailure,
    onYogaShowFailure,
    onYogaUpdateFailure
}