let { container } = require("../../../awilix")

class Controller_User {
    register_user(req, res) {
        let result = container.cradle.User_Services.validator().register_user(req, res)
        if (result) {
            let user = container.cradle.User_Services.services.register_user(result)
            return user;
        }
    }

    delete_user(req, res) {
        let result = container.cradle.User_Services.validator().delete_user(req, res)
        if (result) {
            let user = container.cradle.User_Services.services.delete_user(result)
            return user;
        }
    }
    update_user(req, res) {
        let result = container.cradle.User_Services.validator().update_user(req, res)
        if (result) {
            let user = container.cradle.User_Services.services.update_user(result)
            return user;
        }
    }
    getall_user(req, res) {
        let result = container.cradle.User_Services.validator().getall_user(req, res)
        if (result) {
            let user = container.cradle.User_Services.services.getall_user(result)
            return user;
        }
    }
}
module.exports = Controller_User