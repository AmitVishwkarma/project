const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BaseSchema = new Schema({
  // Define the common properties of the schemas
});

const WorksnapsTimeEntry = BaseSchema.extend({
  student: {
    type: Schema.ObjectId,
    ref: 'Student'
  },
  timeEntries: {
    type: Object
  }
});

const StudentSchema = BaseSchema.extend({
  firstName: {
    type: String,
    trim: true,
    default: ''
 
  },
  lastName: {
    type: String,
    trim: true,
    default: ''

  },
  displayName: {
    type: String,
    trim: true
  },
  municipality: {
    type: String
  }
});