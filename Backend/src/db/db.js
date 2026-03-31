const mongooose = require('mongoose');

async function connectDB() {
    try{
        await mongooose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");

    } catch (error) {
        console.error("database connection error : ", error);
        process.exit(1);
    }
}

moudule.exports = connectDB;