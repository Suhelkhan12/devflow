import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async ()=>{
    // this will not allow unknown field query
    mongoose.set('strictQuery', true);

    // connecting to db
    // for checking if we have mongodb url or not
    if(!process.env.MONGODB_URL){
        return console.log('Missing mongodb connection string')
    }

    // for checking if we are already connected to db or not if we are already connected then we will not connect again
    if(isConnected){
      return  console.log('mongodb is already connected');
    }


    // here finally connecting
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'devflow'
        })

        isConnected=true;
        console.log('Mongo db and mongoose connected')
    }catch(err){
        console.log(err);
    }
}
