'use strict'

class SessionController {
  async create ({ request, auth }) { 
    const { email, password } = request.all()

    // const user_id = await auth.user.id
    // console.log(user_id);  

    const token = await auth.attempt(email, password)
    console.log(token);

    return token
  }
}

module.exports = SessionController