require('dotenv').config()
const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // connect Swagger
const sequelize = require('./db')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const loggerMiddleware  = require('./middleware/loggerMiddleware');

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(errorHandler);
app.use(loggerMiddleware);

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}


start()
