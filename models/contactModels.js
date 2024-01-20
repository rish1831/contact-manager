const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    contactName: {
        type: String,
        required: [true, "Please add the contact name"]
    },
    emailAddress: {
        type: String,
        required: [true, "Please add the contact email address"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Please add the contact phone number"]
    },
    location: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Contact", contactSchema)