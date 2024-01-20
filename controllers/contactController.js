const asyncHandler = require("express-async-handler") // it'll catch the exceptions when any occurs
const Contact = require("../models/contactModels")


const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({
        user_id: req.user.id
    })
    res.status(200).json(
        contacts
    )
})

const createContact = asyncHandler(async (req, res) => {
    const {
        Name,
        emailAddress,
        phone,
        location
    } = req.body

    if (!Name || !emailAddress || !phone) {
        res.status(400)
        throw new Error("All the fields are mandatory")
    }
    const contact = await Contact.create({
        user_id: req.user.id,
        contactName: Name,
        emailAddress,
        phoneNumber: phone,
        location
    })
    res.status(201).json(contact)
})

const getContact = asyncHandler(async (req, res) => {
    const {
        id
    } = req.params
    const contact = await Contact.findById(id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})


const updateContact = asyncHandler(async (req, res) => {
    const {
        id
    } = req.params
    const contact = await Contact.findById(id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error("User does not have permission to update the contact")
    }

    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
        new: true
    })

    res.status(201).json(
        updatedContact
    )
})

const deleteContact = asyncHandler(async (req, res) => {
    const {
        id
    } = req.params
    const contact = await Contact.findById(id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error("User does not have permission to delete the contact")
    }

    await Contact.deleteOne({
        _id: id
    })
    res.status(200).json(contact)

})


module.exports = {
    getContacts,
    createContact,
    deleteContact,
    updateContact,
    getContact
}