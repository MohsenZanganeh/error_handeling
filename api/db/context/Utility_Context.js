let db = require("../models/index")
class Utility_Context {
    constructor({GenericRepository}) {
        this.GenericRepository = GenericRepository
        this.db = db
    }
    User() {
        if (!this.user) {
            this.user = this.GenericRepository.setModel(this.db.User)
            return this.user
        }
        return this.user
    }
}
module.exports = Utility_Context