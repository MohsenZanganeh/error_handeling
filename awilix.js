const awilix = require('awilix')

// Create the container and set the injectionMode to PROXY (which is also the default).
const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})

class UserController {

    // imagine ctx is our HTTP request context...
    getUser() {
     return "Hello Mohsen zanganeh"
    }

}

function setup() {
    container.register({
        usercontroller: awilix.asClass(UserController)
    })
}

module.exports = {
    container,
    setup
}; 