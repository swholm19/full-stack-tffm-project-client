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
  console.log('Set User Info')
}

module.exports = {
  onGetUser,
  onSetUser
}
