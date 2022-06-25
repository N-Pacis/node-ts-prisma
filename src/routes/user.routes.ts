import express from "express"
import { UserController } from "../controllers/user.controller"

const router = express.Router()
const userController = new UserController();

router.get("/users",(req,res)=>{
    return userController.getUsers(req,res)
})

router.get("/users/:id",(req,res)=>{
    return userController.getById(req,res)
})

router.post("/user",(req,res)=>{
    return userController.createUser(req,res)
})

router.put("/users/:id/edit",(req,res)=>{
    return userController.updateUser(req,res)
})

export default router