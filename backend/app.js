const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const staffRoutes = require('./routes/staffRoutes');
const cors=require('cors');


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('MongoDB connected');

        mongoose.connection.collection('staffs').dropIndex('store_1')
    .then(() => console.log('Dropped store index'))
    .catch((error) => console.error('Error dropping store index:', error));
    })
    .catch((error) => console.log('MongoDB connection error:', error));

app.use('/api', staffRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
