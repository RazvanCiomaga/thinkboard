import mongoose from "mongoose";
import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getNoteById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ID format.' });
        }

        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Note not found.' });
        }

        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById controller method", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newNote = await new Note({ title, description }).save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error("Error in createNote controller method.", error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}

export const updateNote = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ID format.' });
        }

        const { title, description } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNote controller method.", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteNote = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid ID format.' });
        }

        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json({ message: 'Note deleted successfully.' });
    } catch (error) {
        console.error("Error in deleteNote controller method.", error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}