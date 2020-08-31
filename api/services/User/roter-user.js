let express=require("express")
let router=express()
let {container} = require("../../../awilix")
router.post("/register",container.resolve('User_Services').controller().register_user)
router.put("/update",container.resolve('User_Services').controller().update_user)
router.delete("/delete",container.resolve('User_Services').controller().delete_user)
router.get("/getall",container.resolve('User_Services').controller().getall_user)
module.exports=router