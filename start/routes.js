'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Init
Route.get('/', () => {
  return { greeting: 'API' }
})

// Token
Route.post('/token', 'TokenController.create')
Route.put('/token', 'TokenController.refreshToken')

// Users
Route.resource('users', 'UserController').apiOnly().validator(new Map ([
  [['users.store'], ['User']], 
  [['users.update'], ['User']]
]))

// Fiis
Route.resource('fiis', 'FiiController').apiOnly()
