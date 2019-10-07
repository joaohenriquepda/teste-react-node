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

Route.get('/users', 'UserController.index');
Route.put('/users', 'UserController.update');
Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');
Route.post('/upload', 'PostController.create');
Route.get('/posts', 'PostController.index');
Route.get('/users/profile', 'UserController.profile');