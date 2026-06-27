const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Add new doctor
router.post('/add', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ 
      message: 'Doctor added successfully!', 
      doctor 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all doctors
router.get('/all', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single doctor
router.get('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update doctor
router.put('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.status(200).json({ 
      message: 'Doctor updated!', 
      doctor 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete doctor
router.delete('/:id', async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Doctor deleted!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;