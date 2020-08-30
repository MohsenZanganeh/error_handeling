require("dotenv").config()

let {setup}=require("./awilix")
setup()

let app=require("./api/index")
new app