'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const leagueUi = require('./ui.js')
const leagueApi = require('./api.js')
const store = require('../store')

const onGetLeague = function (response) {
  console.log('on het league: ', response)
  leagueApi.indexLeague(response.user.league_id)
    .then(leagueUi.getLeagueSuccess)
    .catch(leagueUi.getLeagueError)
}

const onCreateLeague = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  leagueApi.createLeague(data)
    .then(leagueUi.createLeagueSuccess)
    .catch(leagueUi.createLeagueError)
}

module.exports = {
  onCreateLeague,
  onGetLeague
}
