const awilix = require('awilix')
const Generic_Repository = require("./api/db/repository/Generic_Repository")
const Utility_Context = require("./api/db/context/Utility_Context")
let user_service = require("./api/services/User/service-user");
let user_controller = require("./api/services/User/controller-user");
let user_validator = require("./api/services/User/validator-user")
let roter_user = require("./api/services/User/roter-user")
let loader_router = require("./api/Routes/Router_loader")
let app=require("./api/index")
const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})

function setup() {
    container.register({ 
        app: awilix.asClass(app),
        user_service: awilix.asClass(user_service),
        user_validator: awilix.asClass(user_validator),
        user_controller: awilix.asClass(user_controller),
        UtilityContext: awilix.asClass(Utility_Context),
        GenericRepository: awilix.asClass(Generic_Repository),
        roter_user: awilix.asFunction(roter_user),
        loader_router: awilix.asFunction(loader_router),
    })

}


module.exports = {
    container,
    setup
}; 