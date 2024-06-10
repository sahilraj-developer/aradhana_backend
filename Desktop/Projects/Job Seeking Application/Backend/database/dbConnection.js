import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(
        process.env.MONGODB_URI, {
        dbName: "job_seeking_application"
    }).then(() => {
        console.log("Connected to database.");
    }).catch(error => {
        console.log(`Some error occured while connecting database: ${error}`);
    })
}