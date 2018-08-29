const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')

.then(()=>console.log('connected to Mongodb...'))
.catch(err => console.log('could not connect to Mongodb..',err))

const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    date:Date,
    tags:[String],
    isPublished: Boolean,
    price:Number
    
});  

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return await Course

    // .find({tags:'backend',isPublished:true})
    // .sort({name:1})
    // .select({name:1, author:1});

    //  .find({isPublished:true})
    //   .or([{tags:'frontend'}, {tags:'backend'}])
    //  .sort('-price')
    //  .select('name author price');
    //  console.log(course);

      .find({isPublished:true})
      .or([{price:{$gte:15}}, {name:/.*by.*/i}])
      .sort({price:-1})
      .select({name:1, author:1, price:1});

}

// getCourses();
 
async function run(){
    const courses = await getCourses();
    console.log(courses);
}

run();