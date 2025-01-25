const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirmpassword:String,
    location:String,
    dob:String,

    role:{
        type:String,
        default:"user"
    }
},{
    timestamps:true,
    versionKey:false
}
)

const userModel=mongoose.model("users",userSchema)

module.exports=userModel