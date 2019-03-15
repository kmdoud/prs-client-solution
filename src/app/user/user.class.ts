export class User
{
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;
    isActive: boolean;

    constructor ( username: string, password: string, firstname: string, lastname: string,
        phone: string, email: string, isReviewer: boolean = false , isAdmin: boolean = false , isActive: boolean = true)
    {
        this.id = 0;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
        this.isActive = isActive;
    };

    

    
}