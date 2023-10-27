const adminUserModel = require("../models/adminUserModel")
const bcrypt= require('bcrypt');
const {validationResult,check}=require('express-validator')
const jwt=require('jsonwebtoken');

let secretkey="4220149566771"
const registerUserAdmin=async(req,res)=>{
    console.log(req.body)

    const userAdmin={
     
        email:"riz@gmail.com",
        password:"12345678910"
    }

    const {email,password}=req?.body




try{
  
    let user= await adminUserModel.findOne({email});
    if(user){
        return res.status(400).json({msg:"User is Already Exist"});
    }

    user= new adminUserModel({
        email,
        password
    })


    const salt= await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(password,salt);
    await user.save();
    const payload={
        user:{
            id:user.id
        }
    }
    jwt.sign(payload,secretkey,{expiresIn:3600},(err,token)=>{
        if (err) throw err
        res.json({token,userId:user.id,email});
    })


}
catch(error){
    if(error){
        res.status(500).send({error:error.message});
    }
}

}

const loginUserAdmin=async(req,res)=>{
    const { email, password } = req.body;
  


try{
    const user= await adminUserModel.findOne({
        email
    })
    if(!user){
        return res.status(400).send({msg:"Invalid Credentials"})
    }

    const isMatch= await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({msg:"Invalid Credentials"})
    }

    const payload={
        id:user.id
    }

    jwt.sign(payload,secretkey,{expiresIn:3500},(err,token)=>{
        if(err) throw err;
        res.json({token,email,userId:user.id});
    })
}
catch(error){
   if(error){
    res.status(500).json({msg:error?.message})
   }
}

}


module.exports={registerUserAdmin,loginUserAdmin}





