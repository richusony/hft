import mongoose from 'mongoose';

const AdoptionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    place: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    count: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Adoptions || mongoose.model("Adoptions", AdoptionSchema)
