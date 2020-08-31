class Generic_Repository{
    constructor(_model){
        this.model=_model
    }
    async Insert(Data){
        //let newData = this.SetDateNow(Data)
        let newModel = new this.model(Data)
        await newModel.save()
        return status.OK
    }
    // SetDateNow(Data) {
    //     let DateNow = Date.No
    //     Data.update_at = DateNow
    //     if (!Data.created_at) {
    //         Data.created_at = DateNow
    //     }
    //     return Data
    // }
    async delete(){
        let result = await this.model.deleteOne(Condiation)
        if (result.ok > 0) {
            return status.OK
        }
        else {
            return status.NO_CONTENT
        }
    }
    async update(){
        delete Data.id
        let result = await this.model.updateOne(Condition, { $set: Data })
        if (result.n > 0) {
            return status.OK
        }
        else {
            return status.NO_CONTENT
        }
    }
    async find(){
        let result = await this.model.find(Condition)
        if (result.length > 0) {
            return result
        }
        else {
            return status.NO_CONTENT
        }
    }
    setModel(model){
        this.model=model
    }
}

module.exports=Generic_Repository