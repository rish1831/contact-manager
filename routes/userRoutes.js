const express = require("express")
const {
    registerUser,
    loginUser,
    getCurrentUser
} = require("../controllers/userController")
const validationToken = require("../middleware/validateTokenHandler")

const router = express.Router()

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/current').get(validationToken, getCurrentUser)

module.exports = router