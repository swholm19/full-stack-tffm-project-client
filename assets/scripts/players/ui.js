'use strict'
const store = require('../store')
const showPlayersTemplate = require('../templates/players-listing.handlebars')
const playerApi = require('./api.js')

const signInFillRosterSuccess = function (response) {
  $('.roster').html('-')
  response.players.forEach((player) => {
    if (store.user.id === player.user_id) {
      if (player.roster_spot !== '') {
        $(`#${player.roster_spot}`).empty()
        $(`#${player.roster_spot}`).append(` ${player.name}, Keeper: ${player.keeper}`)
      }
    }
  })
}

const assignPlayerToRosterSuccess = function (response) {
  if (response !== undefined) {
    response.player.roster_spot = store.rosterSpot
    $(`#${store.rosterSpot}`).empty()
    $(`#${store.rosterSpot}`).append(` ${response.player.name}, Keeper: ${response.player.keeper}`)
    $('#playerSelect-form')[0].reset()
    $('#playerSelectModalLabel').html('Select Player')
    $('#playerSelectModalLabel').css('color', 'grey')
    $('#playerSelectModal').modal('hide')
    delete store.rosterSpot
    delete store.yourPlayers
    return playerApi.updatePlayer(response.player.id, response)
  }
}

const assignPlayerToRosterError = function () {
  $('#playerSelectModalLabel').html('Player Not Valid: ')
  $('#playerSelectModalLabel').css('color', 'red')
  $('#playerSelect-form')[0].reset()
}

const showAllPlayersSuccess = function (response) {
  $('.all-players').empty()
  store.yourPlayers = response.players.filter(player => store.user.id === player.user_id)
  const showPlayersHtml = showPlayersTemplate({ players: store.yourPlayers })
  $('.all-players').append(showPlayersHtml)
}

const createPlayerSuccess = function () {
  $('#playerCreateModal').modal('hide')
  $('#playerCreateModalLabel').html('Create Player')
  $('#playerCreateModalLabel').css('color', 'grey')
  $('#playerCreate-form')[0].reset()
}

const createPlayerError = function (error) {
  $('#playerCreateModalLabel').html('Not Valid: ', error)
  $('#playerCreateModalLabel').css('color', 'red')
  $('#playerCreate-form')[0].reset()
}

const updatePlayerSuccess = function () {
  $('#playerUpdateModal').modal('hide')
  $('#playerUpdateModalLabel').html('Update Player')
  $('#playerUpdateModalLabel').css('color', 'grey')
  $('#playerUpdate-form')[0].reset()
}

const updatePlayerError = function (error) {
  $('#playerUpdateModalLabel').html('Not Valid: ', error)
  $('#playerUpdateModalLabel').css('color', 'red')
  $('#playerUpdate-form')[0].reset()
}

const deletePlayerSuccess = function () {
  $('#playerDelete-form')[0].reset()
  $('#playerDeleteModalLabel').html('Delete Player: ')
  $('#playerDeleteModalLabel').css('color', 'grey')
  $('#playerDeleteModal').modal('hide')
  delete store.yourPlayers
}

const deletePlayerError = function (error) {
  $('#playerDeleteModalLabel').html('Error Deleting Player: ', error)
  $('#playerDeleteModalLabel').css('color', 'red')
  $('#playerDelete-form')[0].reset()
  delete store.yourPlayers
}

const resetUiHandleing = function () {
  $('#playerDeleteModalLabel').html('Delete Player: ')
  $('#playerDeleteModalLabel').css('color', 'grey')
  $('#playerUpdateModalLabel').html('Update Player')
  $('#playerUpdateModalLabel').css('color', 'grey')
  $('#playerCreateModalLabel').html('Create Player')
  $('#playerCreateModalLabel').css('color', 'grey')
  $('#playerSelectModalLabel').html('Select Player')
  $('#playerSelectModalLabel').css('color', 'grey')
  $('#managerModalLabel').html('Manager Profile')
  $('#managerModalLabel').css('color', 'grey')
}

module.exports = {
  signInFillRosterSuccess,
  assignPlayerToRosterSuccess,
  assignPlayerToRosterError,
  showAllPlayersSuccess,
  createPlayerSuccess,
  createPlayerError,
  updatePlayerSuccess,
  updatePlayerError,
  deletePlayerSuccess,
  deletePlayerError,
  resetUiHandleing
}
