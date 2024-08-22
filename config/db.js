import mongoose from "mongoose";

const connectdb = ()=>{
    mongoose.connect("mongodb+srv://msfarookhy:KLepAfRNDTllgPsK@shopdata.vb3lx.mongodb.net/")
    .then(() => {
        console.log("Database connection established successfully");
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
        process.exit(1);
    });
}

export default connectdb
