import mongoose from 'mongoose';

const DonarSchema = new mongoose.Schema({
    donar: { type: String, required: true },
    student: { type: String, required: true },
    payment_id: { type: String, required: true, unique: true },
    amount: { type: String, required: true },
    dateTime: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Donars || mongoose.model("Donars", DonarSchema)
