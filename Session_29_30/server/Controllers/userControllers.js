const { default: User } = require("../models/userModel");

const registerUser = async(req, res) => {
    const {name, email, password, pic} = req.body;
    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error('User Exists!');
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            isAdmin: user.isAdmin,
        })
    }
    else{
        res.status(404)
        throw new Error('Error Occured')
    }
}

module.exports = {registerUser};