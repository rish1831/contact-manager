const express = require("express")
const {
    getContacts,
    createContact,
    deleteContact,
    updateContact,
    getContact
} = require("../controllers/contactController")
const validationToken = require("../middleware/validateTokenHandler")

const router = express.Router()

router.use(validationToken)
router.route("/").get(getContacts).post(createContact)

router.route("/:id").put(updateContact).delete(deleteContact).get(getContact)


module.exports = router