import mongoose from "mongoose"

let isConnected:boolean = false;

export const connectToDatabase = async () => {
    // it will prevent unknown queries
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URL) {
        console.error('Missing mongodb url.');
        return undefined;
    }

    if (isConnected) {
        console.log('You are already connected.');
        return undefined;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName:'devflow'
        })
        isConnected = true;
        console.log("Connected to database.")
    } catch (err) {
        console.error(err)
    }
}