class Services_User{
    constructor({UtilityContext}){
        this.UtilityContext=UtilityContext
    }
   async register_user(result){
        let user=await this.UtilityContext.User().Insert(result)
        return user
    }

    delete_user(){

    }

    update_user(){

    }

    getall_user(){

    }
}
module.exports=Services_User