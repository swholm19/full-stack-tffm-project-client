'use strict'
const config = require('../config')
const store = require('../store')

const getUser = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/users/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getUsers = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/users',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const setUser = function (data) {
  console.log('updating user: ', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/users/' + store.user.id,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getUser,
  getUsers,
  setUser
}
