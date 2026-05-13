import mongoose from 'mongoose';

// Create schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Create model based off that schema
const Note = mongoose.model('Note', noteSchema);

export default Note;