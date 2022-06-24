interface UserService{

    findById(id:string):User

    saveUser(user:User):User;

    updateUser(id:string,user:User):User;

}