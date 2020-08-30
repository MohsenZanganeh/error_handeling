let express=require("express")
let Router=express();

Router.get("/getalluser")
Router.post("/registeruser")
Router.put("/updateuser")
Router.delete("/deleteuser")

module.exports=Router;