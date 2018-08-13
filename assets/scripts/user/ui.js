'use strict'
const store = require('../store')

const getUserSuccess = function (response) {
  store.manager = response.user
  $('#managerName').html(`Name: ${store.manager.name}`)
  $('#managerEmail').html(`Email: ${store.manager.email}`)
  $('#managerTeam').html(`Team Name: ${store.manager.team_name}`)
  $('#managerStatement').html(`Team Statement: ${store.manager.team_statement}`)
  $('#managerModal').modal('hide')
  $('#manager-form')[0].reset()
  return response
}

const getUserError = function (error) {
  $('#managerModalLabel').html('Error', error)
  $('#managerModalLabel').css('color', 'red')
  $('#manager-form')[0].reset()
}

module.exports = {
  getUserSuccess,
  getUserError
}
