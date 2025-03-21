import userModel from "../../model/userModel/index.js";
import jwt from "jsonwebtoken";
import bcyrpt from "bcrypt";
const SECRET_KEY = "NOTESAPI";

const createToken = (user) =>{
    return jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: "60d"})
}

const registerUser = async (req,res) =>{
    const {name, email, password, phone, role} = req.body;
    try{
        if(role != "Admin" && role != "User"){
            return res.json({
                success:false,
                message: 'Role can only be User or Admin'
            })
        }
        const emailExist = await userModel.findOne({ email});
        if(emailExist){
            return res.json({ success: false, message: "Email already Exists"});
        }
        let hashedPassword;
        if(password){
            const salt = await bcyrpt.genSalt(10);
            hashedPassword = await bcyrpt.hash(password, salt);
        }

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
            phone: phone,
            role: role,
        })

        const user = await newUser.save();
        const token = createToken(user);
        return res.json({ success: true, message: user, token});
    }catch(error){
        return res.json({ success: false, message: error})
    }
}

const loginUser = async (req,res) =>{
    const {email, password} = req.body;
    try{
        const user = await userModel.findOne({ email });
        if(!user){
            return res.json({ success : false, message : "User does not Exist"});
        }
        const isMatch = await bcyrpt.compare(password, user.password);
        if(!isMatch){
            return res.json({ success : false, message: "Invalid Credientials"})
        }
        const token = createToken(user);
        return res.json({ success:true, token, role: user.role});
    }catch(error){
        return res.json({ success: false, message: error})
    }
}

export { registerUser, loginUser};