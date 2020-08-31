let bind=require("auto-bind")
class Controller_User {
    constructor({user_service,user_validator}){
        bind(this)
        this.user_validator=user_validator
        this.user_service=user_service
    }
    register_user(req, res) {
        let result = this.user_validator.register_user(req, res)
        if (result) {
            let user = this.user_service.register_user(result)
            return user;
        }
    }

    delete_user(req, res) {
        let result = this.user_validator.delete_user(req, res)
        if (result) {
            let user = this.user_service.delete_user(result)
            return user;
        }
    }
    update_user(req, res) {
        let result = this.user_validator.update_user(req, res)
        if (result) {
            let user = this.user_service.update_user(result)
            return user;
        }
    }
    getall_user(req, res) {
        let result = this.user_validator.getall_user(req, res)
        if (result) {
            let user = this.user_service.getall_user(result)
            return user;
        }
    }
}
module.exports = Controller_User