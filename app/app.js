// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const Events = require('./auth/events.js')

// event handlers 


$(() => {
  $('#sign-up-form').on('submit', Events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePw)
  $('#sign-out-button').on('click', events.onSignOut)
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#change-password').hide()
  $('#sign-in-form').hide()

  // $('#view-workout-history').on('click', events.onClick)
})
