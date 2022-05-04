// ajax scripts and functions here
// functions that make requests to the API
// requires store.js

const store = require('../store.js')
const config = require('../config.js')

const signUp = function (data) {
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

const yogaCreate = function (formData) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/yogas',
        data: formData,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
    
}

const yogaDestroy = function (id) {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/yogas/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const yogaIndex = function() {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/yogas',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const yogaShow = function() {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/yogas',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const yogaUpdate = function(id, data) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/yogas/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

module.exports = {
    signUp,
    signIn,
    changePassword,
    signOut,
    yogaCreate,
    yogaDestroy,
    yogaIndex,
    yogaShow,
    yogaUpdate
}