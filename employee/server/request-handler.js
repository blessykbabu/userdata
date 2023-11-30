
import userSchema from "./model/employee.schema.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { sign } = jwt;


export async function register(req, res) {
    try {
        let { name,email,phone,place,district,state,role,date,jdate,exp,password} = req.body;
        // if( username.length <= 4 && password.length <= 4) {
        //     return res.json("Invalid username or password");
        // }
        let hashedPass = await bcrypt.hash(password, 10);
        let userExist = await userSchema.findOne({ name });
        if(userExist) {
            return res.status(401).send("User already exists");
        }
        // let empdata={ name,email,phone,place,district,state,role,date,jdate,exp,password: hashedPass}
        // console.log("empdata",empdata)
        let result = await userSchema.create({ name,email,phone,place,district,state,role,date,jdate,exp,password: hashedPass});
        if(result){
            return res.status(200).send("Registration successful!");
        }else {
            return res.status(400).send("Registration failed");
        }
       
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}
// export async function login(req, res) {
//     try {
//         let { name, password } = req.body;
//         // if( username.length < 4 && password.length < 4) {
//         //     return res.json("Invalid username or password");
//         // }
//         let user = await userSchema.findOne({ name });
//         if(!user) {
//             return res.status(403).send("Invalid username or password");
//         }
//         let passCheck = await bcrypt.compare(password, user.password);
//         if(passCheck) {
//             let token = await sign({
//                 name: user.name,
//                 id: user._id
//             },
//             process.env.SECRET_KEY,
//             {
//                 expiresIn: "24h"
//             })
//             return res.status(200).json({
//                 msg: "Login successful...",
//                 token: token
//             })
//         }
//         return res.status(403).send("invalid username or password")
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Error");
//     }
// }

// export async function  getAll(req,res){
//     try {
//         let info=await userSchema.find();
//         return res.json(info)
//     } catch (error) {
//         console.log(error)
//         return res.status(500).send("error occured")
//     }
// }


export async function  getEmployee(req,res){
    try{
        let {id}=req.body;
        let result=await userSchema.find({_id:id});
        console.log(result)
        if(result.length > 0){
            return res.status(200).send(result)

        }
        return res.status(200).send({msg:"upload profile data"})
    }
    catch(error){
        console.log(error)
        return res.status(500).send("Error occured")
    }
}

 export async function  EmpList(req,res){
    try {
        let info=await userSchema.find();
        return res.json(info)
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
    }
}

