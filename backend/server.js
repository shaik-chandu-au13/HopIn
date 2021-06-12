const app = require('./app')
const connectdb = require('./config/database')
const dotenv =require('dotenv');
const PORT = process.env.PORT || 4000
dotenv.config({path:'backend/config/config.env'})

connectdb()

app.listen(PORT,()=>{
    console.log(`server started at ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})