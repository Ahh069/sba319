import mongoose from 'mongoose';

const drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sweetness: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    readyToDrink: Boolean
});

const Drink = mongoose.model('Drink', drinkSchema);

export default Drink;