'use strict'
const store = require('../store')

const getUserSuccess = function (response) {
  store.manager = response.user
  $('#managerName').html(`Name: ${store.manager.name}`)
  $('#managerEmail').html(`Email: ${store.manager.email}`)
  $('#managerTeam').html(`Team Name: ${store.manager.team_name}`)
  $('#managerStatement').html(`Team Statement: ${store.manager.team_statement}`)
  $('#manager-form')[0].reset()
}

const getUserError = function (error) {
  console.log(error)
  $('#manager-form')[0].reset()
}

const getUsersSuccess = function (response) {
  console.log(response)
  $('#manager-form')[0].reset()
  store.user = response.user
}

const getUsersError = function () {
}

const setUserSuccess = function (response) {
}

const setUserError = function () {
}

module.exports = {
  getUserSuccess,
  getUserError,
  getUsersSuccess,
  getUsersError,
  setUserSuccess,
  setUserError
}
