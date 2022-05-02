// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const Events = require('./auth/events.js')

// event handlers 

$(() => {
    // attach event listeners
    $('#sign-up-form').on('submit', Events.onSignUp)
    $('#sign-in-form').on('submit', Events.onSignIn)
    $('#change-password-form').on('submit', Events.onChangePassword)
    $('#sign-out-button').on('click', Events.onSignOut)
})
