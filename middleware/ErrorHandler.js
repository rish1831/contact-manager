const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode || 500
    res.json({
        message: error.message,
    })
}

module.exports = errorHandler