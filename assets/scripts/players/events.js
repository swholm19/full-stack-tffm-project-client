'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const userUi = require('./ui.js')
const userApi = require('./api.js')
// const store = require('../store')

const onIndexPlayer = function () {
  userApi.indexPlayer(5)
    .then(userUi.getPlayerSuccess)
    .catch(userUi.getPlayerError)
}

const onShowPlayers = function () {
  console.log('showing players')
  userApi.showPlayers()
    .then(userUi.getPlayerSuccess)
}

const onCreatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.createPlayer(data)
    .then(userUi.getPlayerSuccess)
}

const onUpdatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.updatePlayer(data)
    .then(userUi.getPlayerSuccess)
}

const onDeletePlayer = function () {
  userApi.deletePlayer(1)
    .then(userUi.getPlayerSuccess)
    .catch(userUi.getPlayerError)
}

module.exports = {
  onIndexPlayer,
  onShowPlayers,
  onCreatePlayer,
  onUpdatePlayer,
  onDeletePlayer
}
