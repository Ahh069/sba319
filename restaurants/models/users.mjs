import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true,
        min:10
    },

    staySignedIn: Boolean
});

const User = mongoose.model('User', userSchema);

export default User;