const express = require("express")
const errorHandler = require("./middleware/ErrorHandler")
const connectDb = require("./config/dbConnection")
const cors = require('cors');
const dotenv = require("dotenv").config()

const port = process.env.PORT || 5000

connectDb()
const app = express()


// use is used for middlewares
app.use(express.json()) // used to parse the data stream that we receive from the client side on the server side
app.use(cors())
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/user", require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log("server running on the", {
        port
    })
})