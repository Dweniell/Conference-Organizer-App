export class User{
    Id;
    Username
    Permission = {
        AUTHOR: 'A',
        REVIEWER: 'R',
        ORGANIZER: 'O'
    }
    Password

    constructor(Id,Username,Permission,Password){
        this.Id=Id;
        this.Username=Username;
        this.Permission=Permission;
        this.Password=Password;
    }

    
}