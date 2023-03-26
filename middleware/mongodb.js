import mongoose from 'mongoose';

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

const connectMongo = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGODB_URI,connectionOptions)
    return handler(req, res)
}
export default connectMongo;