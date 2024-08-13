const express = require('express');
const { getAllStaff, addStaff } = require('../controllers/staffController');

const router = express.Router();

router.get('/staff', getAllStaff);

router.post('/staff', addStaff);

module.exports = router;

