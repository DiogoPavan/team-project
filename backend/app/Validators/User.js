'use strict'

class User {
  // retorna todos as regras e erros de uma vez
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }
}

module.exports = User
