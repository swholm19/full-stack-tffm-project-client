'use strict'
const store = require('../store')
const showPlayersTemplate = require('../templates/players-listing.handlebars')

const getPlayerSuccess = function (response) {
  store.players = response.players
  console.log('response.players: ', response.players)
  const showPlayersHtml = showPlayersTemplate({ players: response.players })
  $('#players-content').append(showPlayersHtml)
  $('#sign-up-form')[0].reset()
}

const getPlayerError = function (error) {
  console.log(error)
  $('#sign-up-form')[0].reset()
}

const getPlayersSuccess = function (response) {
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
  getPlayersSuccess,
  getPlayersError,
  setPlayerSuccess,
  setPlayerError
}
