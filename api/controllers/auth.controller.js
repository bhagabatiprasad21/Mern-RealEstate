import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

const signup = async (req,res) => {
   const {username,email,password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password, 10);
   
//    creating the new user instance/object
   const newUser = new User({username, email,password: hashedPassword});
   

//    saving the newly created user to database
    try {
        await newUser.save();
        res.status(201).json({message : "User created successfully" });
    } catch (error) {
        res.status(404).json(error.errmsg );
    }
   

}

export default signup;