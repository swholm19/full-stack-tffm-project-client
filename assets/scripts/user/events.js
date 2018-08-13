'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const userUi = require('./ui.js')
const userApi = require('./api.js')
const leagueEvent = require('../leagues/events.js')

const onGetUser = function () {
  userApi.getUser()
    .then(userUi.getUserSuccess)
    .then(leagueEvent.onGetLeague)
    .catch(userUi.getUserError)
}

const onSetUser = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.setUser(data)
    .then(userUi.getUserSuccess)
    .catch(userUi.getUserError)
}

module.exports = {
  onGetUser,
  onSetUser
}
