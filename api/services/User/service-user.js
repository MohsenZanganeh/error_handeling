class Services_User {
    constructor({ UtilityContext }) {
        this.UtilityContext = UtilityContext
    }
    async register_user(Data) {
        let user = await this.UtilityContext.User().Insert(Data)
        return user
    }

    async delete_user(Condition) {
        let user = await this.UtilityContext.User().delete(Condition)
        return user
    }

    async update_user(Data) {
        let user = await this.UtilityContext.User().update({ id: Data.id }, Data)
        return user
    }

    async getall_user(Condition = {}) {
        let user = await this.UtilityContext.User().find(Condition)
        return user
    }
}
module.exports = Services_User