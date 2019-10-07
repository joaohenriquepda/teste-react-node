'use strict'

const User = use("App/Models/User")

class UserController {

    async index ({ }) {
        const user = User.all();
        return user
      }

    async create ({ request, response, view }) {
        const data = request.only(["username", "email", "password"])
        const user = await User.create(data)
        return user
    
      }


      async profile ({ params, request, response, auth }) {
 
        return auth.getUser()
     
      }
}

module.exports = UserController
