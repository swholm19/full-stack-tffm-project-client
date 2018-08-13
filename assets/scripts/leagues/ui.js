'use strict'
const store = require('../store')

const createLeagueSuccess = function (response) {
  console.log('League Created', response)
}

const createLeagueError = function (error) {
  console.log('League Error', error)
}

const getLeagueSuccess = function (response) {
  console.log('League Index', response.league)
  $('#leagueName').html(response.league.league_name)
  $('#leagueCommissioner').html(response.league.commissioner)
  $('#leagueRules').html(response.league.rules)
  $('#leagueChampion').html(response.league.champion)
  $('#leagueLoser').html(response.league.loser)
}

const getLeagueError = function (error) {
  console.log('League get Error', error)
}

module.exports = {
  createLeagueSuccess,
  createLeagueError,
  getLeagueSuccess,
  getLeagueError
}
