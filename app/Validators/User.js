'use strict'

class User {
  get rules () {
    return {
      password: 'required',
      email: 'required'
    }
  }

  get messages () {
    return {
      'password.required': 'Informe o password',
      'email.required': 'Informe o e-mail',
    }
  }
}

module.exports = User
