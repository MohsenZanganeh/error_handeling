let express = require("express")
let body_parser = require("body-parser")
let { setup } = require("./db/models/index")
let app = express()

class Application {
    constructor({loader_router}) {
      this.loader_router=loader_router
      this.setupDatabase()
      this.setupConfig();
      this.setupRoutes();
      this.setupServer();
    }
    setupDatabase() {
        setup()
    }
    setupServer() {
        app.listen(process.env.PORT,
            console.log(`Connect To Server .......... ${process.env.PORT}`))
    }
    setupConfig() {
        app.use(body_parser.urlencoded({ extended: true }))
        app.use(body_parser.json())
    }
    setupRoutes() {
        app.get('/',(req,res)=>{
            res.send("Hello World.....")
        })
        app.use(this.loader_router)
        
    }
}
module.exports = Application