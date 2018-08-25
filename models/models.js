const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    base_price: { type: Number, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true }
})

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    created: { type: Date, default: new Date },
    account_credit: { type: Number, default: 0 }
})

const bookingSchema = new mongoose.Schema({
    listing_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
    dates: [Date]
})

module.exports = {
    listing: mongoose.model('listings', listingSchema),
    user: mongoose.model('users', userSchema)
}