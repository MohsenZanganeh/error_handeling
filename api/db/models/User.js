let mongoose=require("mongoose")
let user=mongoose.Schema({
    name:{
        type:String,
        trim:true 
    },
    username:{
        type:String,
        trim:true,
        require:true
    },
    password:{
        type:String,
        trim:true,
        require:true
    }
})
let user_model=mongoose.model("user",user)
module.exports=user_model