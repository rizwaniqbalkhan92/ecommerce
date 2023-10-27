const mongoose=require('mongoose');


const AdminUserSchema=new mongoose.Schema({
    // name:{
    //     type:String,
    //     required:true
    // },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // confirmPassword:{
    //     type:String,
    //     required:false
    // },
    // address:{
    //     type:String,
    //     required:false
    // },


})


const adminUserModel= new mongoose.model("AdminUser",AdminUserSchema);
module.exports=adminUserModel;