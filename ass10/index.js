// const express=require("express");
// const app=express();  //server object


// app.use(express.json());  //middleware

// const arr=[{id:1,name:"pratap",marks:90},{id:2,name:"abc",marks:39},{id:3,name:"xyz",marks:88}]
// app.get("/",(req,res)=>{
//     res.send("Welcome to Express");
// });


// app.get("/student",(req,res)=>{
//     res.send(arr)
// });


// app.get("/students",(req,res)=>{
//     let temp=req.query.id;
//     let result=arr.find((o)=>{return o.id==temp});
//     if(result)
//     {
//  res.send(result);
//     }
//     else{
//         res.send("Not Found");
//     }
//  });  


//    app.get("/student1", (req, res) => {
//   let temp1 = Number(req.query.marks); 
//   let result1 = arr.filter((o) => o.marks > temp1); 

//   if (result1.length > 0) {
//     res.send(result1);
//   } else {
//     res.send("Fail");
//   }
// });

// app.put("/updatestudent",(req,res)=>{
//   let temp=Number(req.query.id);
//   const updstud=req.body;
//   const index=arr.findIndex((arr)=>arr.id===temp);
//   if(index==-1){
//      res.send("Id is not find!!");
//   }
//   else{
   
//     arr[index]={...arr[index],...updstud};
//     res.send({message:"Data is updated",data:updstud});
//   }
// });

// app.post("/addstudent",(req,res)=>{
//     const newstudent=req.body;
//     arr.push(newstudent);
//     res.send({message:"Student added successfully!!",data:newstudent});
// })


// app.listen(3400,()=>{
//     console.log("server is start");
// });



const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/studentdb")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

const studentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  marks: Number
});

const Student = mongoose.model('Student', studentSchema);

app.get("/", (req, res) => {
  res.send("Welcome to Express with MongoDB");
});

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Student added", data: student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.listen(3400,()=>{
console.log("server is running on port 3400")
})