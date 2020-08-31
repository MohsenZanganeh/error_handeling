const awilix = require('awilix')

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})

class User_Services {
    validator() {
       let validator_user = require("./api/services/User/validator-user")
       return new validator_user
    }
    services() {
        let services_user = require("./api/services/User/service-user")
        return new services_user
    }
    controller() {
        let controller_user = require("./api/services/User/controller-user")
        return new controller_user
    }
    roter() {
        let roter_user = require("./api/services/User/roter-user")
        return roter_user
    }
}
function GenericRepository(){
    let genericrepository=require("./api/db/repository/Generic_Repository")
    return new genericrepository
}
function setup() {
    container.register({
        User_Services: awilix.asClass(User_Services),
        GenericRepository: awilix.asFunction(GenericRepository)
    })
    

}

module.exports = {
    container,
    setup
}; 