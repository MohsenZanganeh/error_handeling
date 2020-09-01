class Services_User{
    constructor({UtilityContext}){
        this.UtilityContext=UtilityContext
    }
   async register_user(result){
    //    console.log("-------------UtilityContext222222222222222:",await this.UtilityContext.user().find({}));
       
        let user=await this.UtilityContext.user().Insert(result)
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