import mongoose from 'mongoose';

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

const connectMongo = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
        console.log("already connected!!");
    }
   else if( await mongoose.connect(process.env.MONGODB_URI,connectionOptions)){
       return handler(req, res)
       console.log("connected!!");
   }
   else{
    console.log("not connected")
   }
}
export default connectMongo;