class User{
    Id;
    Username
    Password
    Permission = {
        AUTHOR: 'A',
        REVIEWER: 'R',
        ORGANIZER: 'O'
    }
    

    constructor(Id,Username,Password,Permission){
        this.Id=Id;
        this.Username=Username;
        this.Permission=Permission;
        this.Password=Password;
    }
    
    getUsername(){
        console.log(this.Username)
    }

    setUser(Id,Username,Password,Permission){
        this.Id=Id;
        this.Username=Username;
        this.Permission=Permission;
        this.Password=Password;
    }
}
module.exports.User = User;

const user={
    id:0,
    username:"null",
    password:"null",
    permission:"0"
}