const ProductModel = require("../models/adminProductModel")

const createProduct=async(req,res)=>{

    try{
    
     const response =await ProductModel.create({
            name:req?.body?.name,
            description:req?.body?.description,
            price:req?.body?.price,
            address:req?.body?.address,
            createdDate:req?.body?.createdDate,
            quantity:req?.body?.quantity
        })
        if(response){
            res.status(200).json({data:response})
        }

    }
    catch(error){
    console.log("===>",error)
    res.status(500).json({
        msg:error.message
    })
    }
    
    }

const allProducts=async(req,res)=>{

    try{
        const response =await ProductModel.find()
        if(response){
            res.status(200).json({data:response})
        }
    }
    catch(error){
        console.log("===>",error)
        res.status(500).json({
            msg:error.message
        })
    }
    
    }

const deleteProduct=async(req,res)=>{

    try{
    
    }
    catch(error){
    
    }
    
    }

const updateProduct=async(req,res)=>{

    try{
        const response =await ProductModel.updateOne({ _id:req?.body?.id }, { $set: { name: req?.body?.name } })
        if(response){
            res.status(200).json({data:response})
        }
    }
    catch(error){
    
    }
    
    }


    module.exports={createProduct,deleteProduct,updateProduct,allProducts}