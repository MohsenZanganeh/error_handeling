require("dotenv").config()

let { setup, container } = require("./awilix")
setup()

console.log('this is my container', container);

container.resolve('app')
