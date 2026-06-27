const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String
  },
  experience: {
    type: Number
  },
  department: {
    type: String,
    required: true
  },
  availableDays: {
    type: [String],
    enum: ['Monday','Tuesday','Wednesday',
           'Thursday','Friday','Saturday','Sunday']
  },
  fee: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active'
  }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);