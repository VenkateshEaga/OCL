export class AuthService{
    loggedIn= false;
    isAuthenticated(){
        return this.loggedIn;
    }
    islogin(username:string,password:string){
        if(username=="ocl"&& password=="admin$12345"){
            this.loggedIn=true;
        }
    }
}