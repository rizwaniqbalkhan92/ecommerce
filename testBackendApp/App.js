const path = require("path")

const express=require('express');
const app=express()
const cors=require('cors');
const adminAuthRoutes=require('./src/admin/routes/AdminAuthRoutes')
const adminProductRoutes=require('./src/admin/routes/AdminProductsRoutes')
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send({"message":"runing..."})
})
app.use('/admin/auth',adminAuthRoutes)
app.use('/admin/products',adminProductRoutes)
app.use(express.static(path.join(__dirname, "./public/")))


module.exports=app

