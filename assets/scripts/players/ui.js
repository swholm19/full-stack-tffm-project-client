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
const getPlayerError = function (error) {
  console.log(error)
  $('#sign-up-form')[0].reset()
}

const getPlayerSuccess = function (response) {
  $(`#${store.rosterSpot}`).empty()
  $(`#${store.rosterSpot}`).append(` ${response.player.name}, Keeper: ${response.player.keeper}`)
  $('#playerSelect-form')[0].reset()
}

const getPlayersError = function () {
}

const setPlayerSuccess = function (response) {
}

const setPlayerError = function () {
}

module.exports = {
  getPlayerSuccess,
  getPlayerError,
  getPlayersSuccessInitial,
  getPlayersSuccessSelector,
  getPlayersError,
  setPlayerSuccess,
  setPlayerError
}
