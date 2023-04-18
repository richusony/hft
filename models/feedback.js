import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
    user: { type: String, required: true },
    feed: { type: String, required: true}
}, { timestamps: true });

export default mongoose.models.Feedbacks || mongoose.model("Feedbacks", FeedbackSchema)
