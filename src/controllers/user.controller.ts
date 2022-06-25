import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { UserServiceImpl } from "../serviceImpls/user.serviceImpl";
import { UserService } from "../services/user.service";

export class UserController{ 
    private userService:UserService = new UserServiceImpl()

    public async getUsers(req:Request,res:Response){
        const users = await this.userService.getUsers();
        return res.send({
            status: 200,
            messsage: "Users",
            data: users
        })
    }

    public async getById(req:Request,res:Response){
        const {id} = req.params
        const user = await this.userService.getById(id);
        if(user == null){
            return res.send({
                status: 200,
                messsage: "User with id: " + id + " not found"
            })
        }
        return res.send({
            status: 200,
            messsage: "Users with id: " + id,
            data: user
        })
    }

    public async createUser(req:Request,res:Response){
        let user: Prisma.UserCreateInput
        let {firstname,lastname,email,password} = req.body;

        user = {
            firstname,
            lastname,
            email,
            password
        }

        const userCreated = await this.userService.saveUser(user);
        return res.send({
            status: 201,
            message: "User registered",
            data: userCreated
        })
    }

    public async updateUser(req:Request,res:Response){
        let user: Prisma.UserUpdateInput
        let {firstname,lastname} = req.body;
        let {id} = req.params

        user = {
            firstname,
            lastname
        }
        const userUpdated = await this.userService.updateUser(id,user);
        if(userUpdated == null){
            return res.send({
                status: 404,
                message: "User with id "+id+" not found"
            })
        }
        return res.send({
            status: 200,
            message: "User with id "+id+" updated successfully",
            data: userUpdated
        })
    }
}