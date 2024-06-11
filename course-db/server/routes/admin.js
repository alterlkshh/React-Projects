const mongoose = require("mongoose")
const express = require('express')
const {User, Course, Admin} = require("../db")
const jwt = require('jsonwebtoken')
const { SECRET } = require("../middleware/auth")
const { authenticateJwt } = require("../middleware/auth")

const router = express.Router();

router.get("/me", authenticateJwt, async(req,res) => {
    const admin = await Admin.findOne({ username: req.use.username });
    if(!admin){
      res.status(403).json({msg: "Admin doesn't exist"})
      return
    }
    res.json({
        username: admin.username
    })
});

router.post('/signup', async(req, res) => {
    // logic to sign up admin
    const {username,password} = req.body
    const admin = await Admin.findOne({username})
    if(admin){
      res.status(403).json({message: 'Admin already exists'})
    } else {
      const newAdmin = new Admin({username, password})
      await newAdmin.save()
      const token = jwt.sign({username, role: 'admin'}, SECRET, {expiresIn: '1h'})
      res.json({message : 'Admin created successfully', token})
    }
  });

  router.post('/login', async(req, res) => {
    // logic to log in admin
    const {username, password} = req.headers;
    const admin = await Admin.findOne({username, password})
    if(admin) {
      const token = jwt.sign({username, role: 'admin'}, SECRET, {expriresIN: '1h'})
      res.json({message: 'Logged in successfully', token})
    } else {
      res.status(403).json({message: 'Invalid username or password'})
    }
  }); 
  
  router.post('/courses', authencticateJWT, async(req, res) => {
    // logic to create a course
    const course = new Course(req.body)
    await course.save()
    res.json({message : 'course created successfully', courseId: course.id})
  
  });
  
  router.put('/courses/:courseId', authencticateJWT, async(req, res) => {
    // logic to edit a course
   const course = await Course.findByIdAndUpdate(req.params.courseId,req.body,{new:true})
   if(course){
    res.json({message : 'course updated successfully'})
   } else {
    res.status(404).json({message : 'Course not found'})
   }
  });
  
  router.get('/courses', authencticateJWT, async(req, res) => {
    // logic to get all courses
    const courses = await Course.find({})
    res.json({courses})
  });

  router.get('/course/:courseId', authenticateJwt, async(req,res) => {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    res.json({course});
  });

  module.exports = router