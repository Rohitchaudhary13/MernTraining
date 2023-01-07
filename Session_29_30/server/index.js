const express = require('express');
const app = express();
const notes = require('./data/notes');
const dotenv = require('dotenv');
const userRoutes = require('../server/Routes/userRoutes');
const connectDB = require('../server/config/db');
dotenv.config();

connectDB();
app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
})
app.get('/api/notes', (req, res) => {
    res.json(notes);
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})