'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const userProfile = require('./user/events')
const playerEvent = require('./players/events')
const playerUi = require('./players/ui')

$(() => {
  // Authentication Event Handlers
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePW)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Action Event Handlers - Manager/Player
  $('#manager-form').on('submit', userProfile.onSetUser)
  $('#playerCreate-form').on('submit', playerEvent.onCreatePlayer)
  $('#playerUpdate-form').on('submit', playerEvent.onUpdatePlayer)
  $('#playerSelect-form').on('submit', playerEvent.selectPlayerForRoster)
  $('.player-selector').on('click', playerEvent.onShowAllPlayers)
  $('#playerDelete-form').on('submit', playerEvent.onDeletePlayer)

  // Action Event Handlers - League

  // Reset UI Handling Elements
  $('.content-button').on('click', playerUi.resetUiHandleing)
})
