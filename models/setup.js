const mongoose = require('mongoose');

function setupDB() {
    mongoose.connect('mongodb://localhost:27017/next-network')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });    
}

module.exports = setupDB;