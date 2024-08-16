const mongoose = require('mongoose');

const dbConnection = async() => {
   try {
     await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected successfully');
   } catch (error) {
    console.log(`mongo db Error is ${error}`);

   }
}

module.exports = dbConnection;