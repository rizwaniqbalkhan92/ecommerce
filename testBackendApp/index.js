const app=require('./App');
const mongoose=require('mongoose');
const PORT=4000;



const serverRun=async()=>{
const mongoooseUrl="mongodb+srv://rizwan:Rizwan49566771@cluster0.vdjhfwd.mongodb.net/?retryWrites=true&w=majority"
try{
    await mongoose.connect(mongoooseUrl)
    .then((res)=>{
        console.log("DB CONNECTED : ")
    })
    .catch((err)=>{
        {
            console.log("ERROR==>> : ",err)
        }
    })
    app.listen(PORT,()=>{
        console.log("SERVER IS RUNING...")
    })
}
catch(error)
{
    console.log("ERROR======>>>>>SERVER")

}
}

serverRun()
