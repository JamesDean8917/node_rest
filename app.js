const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const route_post = require('./routes/posts');

app.use(bodyParser.json());
app.use('/posts', route_post);

require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true 
}, () => console.log('DB Connected'))


app.get('/', (req, res) => {
    res.send('We are on home');
})



app.listen(5000, ()=>console.log('Server is running'))