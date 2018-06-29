'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const userUi = require('./ui.js')
const userApi = require('./api.js')
const store = require('../store')

const onGetUser = function () {
  userApi.getUser()
    .then(userUi.getUserSuccess)
    .catch(userUi.getUserError)
}

const onSetUser = function (event) {
  event.preventDefault()
  console.log('inside set user...')
  console.log('Set User Event: ', event)
  const data = getFormFields(event.target)
  console.log('got the data')
  userApi.setUser(data)
    .then(userUi.getUserSuccess)
}

module.exports = {
  onGetUser,
  onSetUser
}
