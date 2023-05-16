const WorksnapsTimeEntryModel = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntry);
const StudentModel = mongoose.model('Student', StudentSchema);

async function displayStudentTimeEntries() {
  try {
    const students = await StudentModel.find().exec();

    for (const student of students) {
      const timeEntries = await WorksnapsTimeEntryModel.find({ student: student._id }).exec();

      console.log(`Student: ${student.firstName} ${student.lastName}`);
      console.log('Time Entries:');
      console.log(timeEntries);
      
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

displayStudentTimeEntries();
