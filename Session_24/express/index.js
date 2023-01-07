const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/index');
const PORT = 3000;


app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(mainRouter);

// console.log(app.get('view engine'));

// views

// app.set('views', path.join(__dirname, '/templates'));
// console.log(app.get('views'));

// app.get('/', (req, res) => {
//     res.render('index', {
//         title: 'My Home Page'
//     });
// })
// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'My About Page'
//     });
// })
// app.get('/download', (req, res) => {
//     res.download(path.join(__dirname, 'public', '/about.html'));
// })

// app.get('/temp', (req, res) => {
//     res.json([
//         {
//             id: 1,
//             name: 'chrome',
//         },
//         {
//             id: 1,
//             name: 'chrome',
//         },
//         {
//             id: 1,
//             name: 'chrome',
//         },
//         {
//             id: 1,
//             name: 'chrome',
//         },
//     ]);
// })

//static middleware

//download


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

//template engines
// pug , ejs, handlebars

// crud operations
//api
// c = create = post 
// r = read  = get 
// u = update = put
// d = delete = delete 