const mongoose = require("mongoose")

// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: [{type:String}],
    password : String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
  })
  
  const adminSchema = new mongoose.Schema({
    usernmae: String,
    password: String
  })
  
  const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
  })
  
  // Define Mongoose models
  const User = mongoose.model('User', userSchema)
  const Admin = mongoose.model('Admin', adminSchema)
  const Course = mongoose.model('Course', courseSchema) 

  module.exports = {
    User,
    Admin,
    Course
  }