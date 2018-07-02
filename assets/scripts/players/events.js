'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const userUi = require('./ui.js')
const userApi = require('./api.js')
const store = require('../store')

const onIndexPlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.rosterSpot = data.player.roster_spot
  userApi.indexPlayer(data)
    .then(userUi.getPlayerSuccess)
    .catch(userUi.getPlayerErrorSelectModal)
}

const onShowPlayersOnSignIn = function () {
  userApi.showPlayers()
    .then(userUi.getPlayersSuccessOnSignIn)
}

const onShowPlayersForRosterSelectionModal = function () {
  userApi.showPlayers()
    .then(userUi.getPlayersSuccessSelector)
    .catch(userUi.getPlayerErrorSelectModal)
}

const onCreatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.createPlayer(data)
    .then(userUi.createPlayerSuccess)
    .catch(userUi.createPlayerError)
}

const onUpdatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.updatePlayer(data.player.ID, data)
    .then(userUi.updatePlayerSuccess)
    .catch(userUi.updatePlayerError)
}

const onDeletePlayer = function () {
  userApi.deletePlayer(1)
    .then(userUi.getPlayerSuccess)
    .catch(userUi.getPlayerError)
}

module.exports = {
  onIndexPlayer,
  onShowPlayersOnSignIn,
  onShowPlayersForRosterSelectionModal,
  onCreatePlayer,
  onUpdatePlayer,
  onDeletePlayer
}
