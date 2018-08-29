const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/playground')

 .then(() => console.log('connected to MongoDB...'))
 .catch(err => console.error('could not connect to Mongo DB...', err));

 const courseSchema = new mongoose.Schema({
     name:String,
     author: String,
     tags :[ String ],
     date : {type:Date, default:Date.now},
     isPublished: Boolean
 });

 // Classes, Objects
 // Human. John
 async function createCourse(){
    const Course = mongoose.model('Course', courseSchema);
    const course = new Course({
     name: 'ReactJS Course',
     author: 'Ejiro',
     tags: ['React', 'FrontEnd'],
     isPublished: true
    });
   
    const result = await course.save();
    console.log(result);
 }

 createCourse();


//  async function FindCourse(){
//      const 
//  }