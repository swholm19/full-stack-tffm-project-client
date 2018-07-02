'use strict'
const store = require('../store')
const showPlayersTemplate = require('../templates/players-listing.handlebars')

const getPlayersSuccessInitial = function (response) {
}

const getPlayersSuccessSelector = function (response) {
  $('#all-players').empty()
  const showPlayersHtml = showPlayersTemplate({ players: response.players })
  $('#all-players').append(showPlayersHtml)
}

const getPlayerErrorSelectModal = function (error) {
  $('#playerSelectModalLabel').html('Player Not Valid: ', error)
  $('#playerSelectModalLabel').css('color', 'red')
  $('#playerSelect-form')[0].reset()
}

const getPlayerSuccess = function (response) {
  $(`#${store.rosterSpot}`).empty()
  $(`#${store.rosterSpot}`).append(` ${response.player.name}, Keeper: ${response.player.keeper}`)
  $('#playerSelect-form')[0].reset()
  $('#playerSelectModalLabel').html('Select Player')
  $('#playerSelectModalLabel').css('color', 'grey')
  $('#playerSelectModal').modal('hide')
  delete store.rosterSpot
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

module.exports = {
  getPlayerSuccess,
  getPlayerErrorSelectModal,
  getPlayersSuccessInitial,
  getPlayersSuccessSelector,
  createPlayerSuccess,
  createPlayerError,
  updatePlayerSuccess,
  updatePlayerError
}
