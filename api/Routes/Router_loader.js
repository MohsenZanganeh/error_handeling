let express = require("express")
let router = express()



module.exports = ({ roter_user }) => {
    router.use(roter_user)
    return router
}