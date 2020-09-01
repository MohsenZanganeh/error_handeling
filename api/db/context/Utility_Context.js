let { user } = require("../models/index")
class Utility_Context {
    constructor({ GenericRepository }) {
        this.GenericRepository = GenericRepository
        this.user = new this.GenericRepository
    }
    User() {
        this.user.setModel(user)
        return this.user
    }
}
module.exports = Utility_Context