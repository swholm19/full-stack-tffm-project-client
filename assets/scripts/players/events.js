'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const playerUi = require('./ui.js')
const playerApi = require('./api.js')
const store = require('../store')

const onSignInFillRoster = function () {
  playerApi.showPlayers()
    .then(playerUi.signInFillRosterSuccess)
}

const selectPlayerForRoster = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.rosterSpot = data.player.roster_spot
  checkRosterSpotOpening()
  playerApi.indexPlayer(data)
    .then(playerUi.assignPlayerToRosterSuccess)
    .then(() => onSignInFillRoster())
    .catch(playerUi.assignPlayerToRosterError)
}

const checkRosterSpotOpening = function () {
  store.yourPlayers.forEach((currentPlayer) => {
    if (currentPlayer.roster_spot === store.rosterSpot) {
      currentPlayer.roster_spot = ''
      const data = {player: currentPlayer}
      playerApi.updatePlayer(currentPlayer.id, data)
    }
  })
}

const onShowAllPlayers = function () {
  playerApi.showPlayers()
    .then(playerUi.showAllPlayersSuccess)
    .catch(playerUi.assignPlayerToRosterError)
}

const onCreatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.player.keeper === 'False') {
    data.player.keeper = false
  }
  playerApi.createPlayer(data)
    .then(playerUi.createPlayerSuccess)
    .catch(playerUi.createPlayerError)
}

const onUpdatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.player.keeper === 'False') {
    data.player.keeper = false
  }
  playerApi.updatePlayer(data.player.ID, data)
    .then(playerUi.updatePlayerSuccess)
    .then(() => onSignInFillRoster())
    .catch(playerUi.updatePlayerError)
}

const onDeletePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  playerApi.deletePlayer(data.player.ID)
    .then(playerUi.deletePlayerSuccess)
    .then(() => onSignInFillRoster())
    .catch(playerUi.deletePlayerError)
}

module.exports = {
  selectPlayerForRoster,
  onSignInFillRoster,
  onShowAllPlayers,
  onCreatePlayer,
  onUpdatePlayer,
  onDeletePlayer
}
