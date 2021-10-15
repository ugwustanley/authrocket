
const axios = require("axios")

class Authentication {

    constructor(apiKey , appName){

        this.apiKey = apiKey
        this.appName = appName
    }


    loginJSON(){

        return {

            auth:{
                apiKey: this.apiKey || '',
                appName: this.appName || ''
            },
            user:{
                email:this.email || '',
                password: this.password || ''
            }
        }

    }


    registerJSON(){

        return {
            auth:{
                apiKey: this.apiKey,
                appName: this.appName
            },
            user:{
                email:this.email || '',
                password: this.password || ""
            },
            payload: this.payload || null
        }
    }


    list(){
        console.log(this.registerJSON())
    }


    async createAccount(email, password, payload = null){
           
          if(!email) throw Error("email address not provided")
          if(!password) throw Error("user password not provided")

          this.email = email || ''
          this.password = password || ''
          this.payload = payload || null
          
          const details = this.registerJSON()

             axios.post('http://localhost:8080/v1/users/register', details).then(user =>{
                 console.log(user)
             }).catch(err => {console.log(err, err.message)})

            // if(user){
            //   console.log(user)
            //   return user
            // }
    
        
    }


    login(email, password){

        if(!email) throw Error("email address not provided")
        if(!password) throw Error("user password not provided")

        this.email = email
        this.password = password
    }


    isUserSignedIn(){

    }
    isEmailVerified(){

    }

    signout(){
         console.log(localStorage)
    }

}




class Authrocket {

   static initializeApp({apiKey , appName}){

       if(!apiKey) throw Error("apiKey not provided")

       if(!appName) throw Error("appName not provided")

       return new Authentication(apiKey , appName)
    }
}


module.exports = Authrocket;
