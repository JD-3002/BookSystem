const User = require("../models/User.models.js")
const jwt = require("jsonwebtoken")


exports.login = async(req,res) => {
    const{username,password}=req.body
    const user = await User.findOne({username});
    if(!user || !(await user.comparePassword(password))){
        return res.status(400).json({ message: 'Invalid credentials: No such User exists' });
        
        }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
}

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.findOne({ username });
  if (exists) return res.status(400).json({ message: 'User exists' });

  const user = new User({ username, password });
  await user.save();
  res.status(201).json({ message: 'User created' });
};