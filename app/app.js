// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// app.js requires events.js
const Events = require('./auth/events.js')


$(() => {
    // register event handler functions
    $('#sign-up-form').on('submit', Events.onSignUp)
    $('#sign-in-form').on('submit', Events.onSignIn)
    $('#change-password-form').on('submit', Events.onChangePassword)
    $('#sign-out-button').on('click', Events.onSignOut)
    $('#yoga-create').on('submit', Events.onYogaCreate)
    $('#yoga-destroy').on('submit', Events.onYogaDestroy)
    $('#yoga-index').on('click', Events.onYogaIndex)
    $('#yoga-show').on('click', Events.onYogaShow)
    $('#yoga-update').on('click', Events.onYogaUpdate)
})
