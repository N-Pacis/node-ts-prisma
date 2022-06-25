import { PrismaClient, User } from "@prisma/client";
import { excludePassword } from "../middlewares/excludePassword.middleware";
import { UserService } from "../services/user.service";

export class UserServiceImpl implements UserService {

    private prisma = new PrismaClient()

    async getUsers():Promise<User[]>{
        const users = await this.prisma.user.findMany({});
        return users
    }

    async findById(id: string): Promise<Boolean> {
        const user = await this.prisma.user.findUnique({
            where: {id: Number(id)}
        })
        if(user == null) return false;
        return true;
    }

    async getById(id: string):Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: {id: Number(id)}
        })
        return user;
    }
    
    async saveUser(user:any):Promise<User> {
        this.prisma.$use(excludePassword)

        const createUser = await this.prisma.user.create({data: user})
        return createUser;
    }
    
    async updateUser(id: string, user: User): Promise<User | null> {
        let userExists = await this.findById(id)
        if(!userExists){
            return null
        }
        this.prisma.$use(excludePassword)
        const updatedUser = await this.prisma.user.update({
            where: {id: Number(id)},
            data: user
        })
        return updatedUser;
    }
    
}