let mongoose = require("mongoose")
function setup(){
  mongoose.connect("mongodb://mongo/db_training", {
    poolSize: 1,
    useFindAndModify: true
  })
  let db = mongoose.connection
  db.once("open", () => {
    console.log("Connect To Database ........")
  })
}

let user=require("./User")
module.exports={
  user,
  setup
}
