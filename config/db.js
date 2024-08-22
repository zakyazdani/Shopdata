import mongoose from "mongoose";

const connectdb = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Database connection established successfully");
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
        process.exit(1);
    });
}

export default connectdb
