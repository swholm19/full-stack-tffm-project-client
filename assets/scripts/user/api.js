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

const getUsers = function (data) {
  console.log('inside users data: ', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/users',
    data: data
  })
}

const setUser = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/users',
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
