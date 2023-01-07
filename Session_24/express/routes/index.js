const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey');


router.get('/', (req, res) => {
    res.render('index', {
        title: 'My Home Page'
    });
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'My About Page'
    });
})

router.get('/api/products', apiKeyMiddleware ,(req, res) => {
    res.json([
        {
            id: 1,
            name: 'figma',
        },
        {
            id: 2,
            name: 'netflix',
        },
        {
            id: 3,
            name: 'spotify',
        },
        {
            id: 4,
            name: 'chrome',
        },
        {
            id: 5,
            name: 'meta',
        },
    ])
})
module.exports = router;