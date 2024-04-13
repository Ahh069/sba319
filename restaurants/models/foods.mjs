import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    Sandwich: {
        type: String,
        required: true
    },
    bread: {
        type: String,
        required: true
    },
    Side: {
        type: String,
        required: true
    },
    Dessert: {
        type: String,
        required: true
    },
    toGoOrder: Boolean
});

const Food = mongoose.model('Food', foodSchema);

export default Food;