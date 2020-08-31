let express = require("express")
let router = express()
module.exports = ({user_controller})=>{
    router.post("/register", user_controller.register_user)
    router.put("/update", user_controller.update_user)
    router.delete("/delete", user_controller.delete_user)
    router.get("/getall", user_controller.getall_user)
    return router
}