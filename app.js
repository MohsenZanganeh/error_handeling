require("dotenv").config()
require("app-module-path").addPath(__dirname);

let { setup, container } = require("./awilix")
setup()

console.log("this is my container", container);

container.resolve("app")
