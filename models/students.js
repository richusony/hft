import { Schema, model, models } from 'mongoose';

const studentsSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    age: Number,
    blood: String,
    school: String,
    img_url: String
});

const Student = models.Students || model('Students', studentsSchema);

export default Student;
