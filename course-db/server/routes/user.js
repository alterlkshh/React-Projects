const express = require('express');
const {authenticateJwt, SECRET} = require("../middleware/auth");
const { User, Course, Admin } = require("../db");
const router = express.Router();

router.post('/signup', async(req,res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
        res.status(403).json({ message: 'User already exists' });
    } else {
        const newUser = new User({ username, password});
        await newUser.save();
        const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h'});
        res.json({ message: 'User created successfully', token});
    }
});