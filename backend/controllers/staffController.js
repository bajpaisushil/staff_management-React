const Staff = require('../models/staff');


const getAllStaff = async (req, res) => {
    try {
        const staff = await Staff.find();
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching staff', error });
    }
};


const addStaff = async (req, res) => {
    const { name, role, mobileNumber, storeId } = req.body;
    console.log('req.body-', req.body);
    try {
        const newStaff = new Staff({ name, role, mobileNumber, storeId });
        await newStaff.save();
        res.status(201).json(newStaff);
    } catch (error) {
        res.status(500).json({ message: 'Error adding staff', error });
    }
};

module.exports = {
    getAllStaff,
    addStaff,
};

