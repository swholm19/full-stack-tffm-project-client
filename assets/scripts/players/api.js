'use strict'
const config = require('../config')
const store = require('../store')

const indexPlayer = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/players/' + id
  })
}

const showPlayers = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/players'
  })
}

const createPlayer = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/players/',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePlayer = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/players/' + id,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePlayer = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/players/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexPlayer,
  showPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer
}
