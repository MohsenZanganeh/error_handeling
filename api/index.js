let express=require("express")
let body_parser=require("body-parser")

let app=express()

class Application{
    constructor(){
        this.setupServer();
        this.setupRoutes();
        this.setupConfig();
    }
    setupServer(){
        app.listen(process.env.PORT,
            console.log(`Connect To Server .......... ${process.env.PORT}`))
    }
    setupConfig(){
        app.use(body_parser.urlencoded({extended:true}))
        app.use(body_parser.json())
    }
    setupRoutes(){
        
    }
}
module.exports=Application
