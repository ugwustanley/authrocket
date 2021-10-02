import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    apiKey: {
        type: String,
        required: true,
    },
    payload: {
        type: Object,
        required: false,
    }
}, {
    timestamps: true
});


const apiKeySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    key: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});


export const apiKey = mongoose.model("key", apiKeySchema);

export const User = mongoose.model("User", userSchema);
