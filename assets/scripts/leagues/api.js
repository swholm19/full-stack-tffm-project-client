'use strict'
const config = require('../config')
const store = require('../store')

const indexLeague = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/leagues/' + id
  })
}

const showLeagues = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/leagues'
  })
}

const createLeague = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/leagues/',
    data: data
  })
}

const updateLeague = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/leagues/' + id,
    data: data
  })
}

const deleteLeague = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/leagues/' + id
  })
}

module.exports = {
  indexLeague,
  showLeagues,
  createLeague,
  updateLeague,
  deleteLeague
}
