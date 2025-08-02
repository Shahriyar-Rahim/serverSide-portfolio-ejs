const express = require('express');
require('dotenv').config();
const ejs = require('ejs');
const app = express()
const cors = require('cors');

const port = process.env.port || 3000;

// MIDLLWR
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs');


// routes
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/projects', (req, res) => {
    res.render('projects');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})