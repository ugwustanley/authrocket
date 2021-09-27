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
    payload: {
        type: Object,
        required: false,
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;