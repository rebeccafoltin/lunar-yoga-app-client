// ajax scripts and functions here

const store = require('../store.js')
const config = require('../config.js')

const signUp = function (data) {
    console.log(store)
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-up',
        data
    })
}

const signIn = function (data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-in',
        data
    })
}

const changePassword = function (data) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/change-password',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const signOut = function() {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/sign-out',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
    signUp,
    signIn,
    changePassword,
    signOut
}