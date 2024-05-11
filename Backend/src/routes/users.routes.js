import { Router } from "express";
import { uploader } from "../utils"
import { userModel } from "../models/users.model.js"


const router = Router();

let users= [];


//Get all users
router.get("/", async, (req, res) =>{
    try {
        let users = userModel.find()
        res.status(200).send({status:"Success", payload:users})
    }
    catch (error) {
        console.error("Cannot get users with mongoose: ", error)
        res.status(500).send({status:"Error", payload:error})
    }
});


//Create user
router.post("/", async(req, res) =>{
    let { name, password, email } = req.body;
    if(!name || !password || !email) return res.send({status:"Error", error:"Incomplete values"});
    
    let result = await userModel.create({
        name,
        password,
        email
    });
    
    res.send({status:"Success", payload:result});
});


router.put("/:uid", async(req, res) =>{
    let { uid } = req.params;
    
    let userToRemplace = req.body;
    if(!userToRemplace.name || !userToRemplace.password || !userToRemplace.email) return res.send({status:"Error", error:"Incomplete values"});
    
    let result = await userModel.updateOne({_id:uid}, userToRemplace)
    
    res.send({status:"Success", payload:result});
})


router.delete("/:uid", async(req, res) =>{
    let { uid } = req.params;
    
    let result = await userModel.deleteOne({_id:uid})
    
    res.send({status:"Success", payload:result});
})


export default router;