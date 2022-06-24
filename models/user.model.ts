class User{
    
    private id:string;

    private firstname:string;

    private lastname:string;

    private email:string;

    private password:string;

    public User(id:string,firstname:string,lastname:string,email:string,password:string):void{
        this.id = id
        this.firstname=firstname
        this.lastname=lastname
        this.email=email
        this.password=password
    }

    public getId():string{
        return this.id;
    }

    public getFirstname():string{
        return this.firstname;
    }

    public getLastname():string{
        return this.lastname;
    }
    
    public getEmail():string{
        return this.email;
    }
    
    public getPassword():string{
        return this.password;
    }

    public setFirstname(firstname:string):void{
        this.firstname = firstname;
    }
    
    public setLastname(lastname:string):void{
        this.lastname = lastname;
    }

    public setEmail(email:string):void{
        this.email = email;
    }

    public setPassword(password:string):void {
        this.password = password;
    }

}