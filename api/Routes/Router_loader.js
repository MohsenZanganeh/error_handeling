let express=require("express")
let router=express()
let {container}=require("../../awilix")
router.use(container.cradle.User_Services.roter())

module.exports=router