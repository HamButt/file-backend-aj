const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.0.126:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}))


app.use('/images', express.static("images"));
app.use('/',require('./routers/home.router'))
app.use('/',require('./routers/slug.router'))
app.use('/',require('./routers/contact.router'))
app.use('/',require('./routers/addproduct.router'))



app.listen(5000, () =>{
    console.log("Server is running on port 5000");
})