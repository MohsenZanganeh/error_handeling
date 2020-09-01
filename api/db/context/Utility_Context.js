let {user} = require("../models/index")
class Utility_Context {
    constructor({GenericRepository}) {
        this.GenericRepository = GenericRepository
    }
   user() {
       this.user = this.GenericRepository(user)
       return this.user
    }
}
module.exports = Utility_Context