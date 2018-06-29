'use strict'
const store = require('../store')
// const showPlayersTemplate = require('../templates/players-listing.handlebars')

const getPlayersSuccess = function (response) {
  store.players = response.players
  const playerPositions = ['QB', 'RB', 'RB', 'WR', 'WR', 'TE', 'FLX', 'D/ST', 'K']
  $('#p1').append('tom brady')
  console.log(store.players)
  const whoIsWR = store.players.findIndex((player) => player.position === 'WR')
  console.log(whoIsWR)
  for (let i = 1; i < 9; i++) {

    // for (let n = 0; n < store.players.length; n++) {
    //   if (store.players[n].position == 'QB') {
    //     playerPositions[n] = store.players
    //   } else if (store.players[n].position === 'RB') {
    //
    //   }
    // }
  }
  // $('#players-form')[0].reset()
}
// const showPlayersHtml = showPlayersTemplate({ players: response.players })
// $('#players-content').append(showPlayersHtml)

const getPlayerError = function (error) {
  console.log(error)
  $('#sign-up-form')[0].reset()
}

const getPlayerSuccess = function (response) {
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
