import mongoose from "mongoose";

const adminSchema = new  mongoose.Schema({
  adminid: String,
  email: String,
  password: String,

});
const studentSchema = new  mongoose.Schema({
  studentid: String,
  name: String,
  email: String,
  batch: String,
  year: String,
  section: String,
  faculty: String,
  //instance of admin 
  admin:{ type:mongoose.Types.ObjectId, ref:"Admin"}

});

const teacherSchema = new  mongoose.Schema({
  teacherid: String,
  name: String,
  email: String,
  faculty: String,
  password: String,
  admin:[{ type:mongoose.Types.ObjectId, ref:"Admin"}]

  
});

const subjectSchema = new  mongoose.Schema({
  subjectid: String,
  subjectname: String,
  faculty: String,
});

const noteSchema = new  mongoose.Schema({
  noteid: String,
  subjectid: String,
  title: String,
  file: String,
  faculty: String,
  year: String,
  section: String,
});

const internalMarksSchema = new  mongoose.Schema({
  markid: String,
  subjectid: String,
  studentid: String,
  marks: Number,
  teacherid: String,
});
const attendanceSchema = new  mongoose.Schema({
  attendid: String,
  studentid: String,
  subjectid: String,
  teacherid: String,
  date: String,
  present: Boolean,
  teacher:{type:mongoose.Types.ObjectId, ref:"Teacher"}

});

const noticeSchema = new mongoose.Schema({
  noticeid: String,
  title: String,
  description: String,
  faculty: String,
  section: String,
  year: String,
  subjectid: String,
});
const Admin = model("Admin", adminSchema);
const Student = model("Student", studentSchema);
const Teacher = model("Teacher", teacherSchema);
const Subject = model("Subject", subjectSchema);
const Note = model("Note", noteSchema);
const InternalMarks = model("InternalMarks", internalMarksSchema);
const Attendance = model("Attendance", attendanceSchema);
const Notice = model("Notice", noticeSchema);

export {
  Admin,
  Student,
  Teacher,
  Subject,
  Note,
  InternalMarks,
  Attendance,
  Notice,
};
