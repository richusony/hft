import mongoose from 'mongoose';

const GallerySchema = new mongoose.Schema({
    gallery_id: { type: String, required: true, unique: true },
    img_url: { type: String, required: true },
    dateTime: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Gallerys || mongoose.model("Gallerys", GallerySchema)
