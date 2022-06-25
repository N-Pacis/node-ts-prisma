import { Prisma, User } from "@prisma/client";

export interface UserService{

    getUsers():Promise<User[]>

    findById(id:string):Promise<Boolean>

    getById(id:string):Promise<User | null>

    saveUser(user:Prisma.UserCreateInput):Promise<User>;

    updateUser(id:string,user:Prisma.UserUpdateInput):Promise<User | null>;

}