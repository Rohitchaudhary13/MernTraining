function apiKey(req, res, next){
    const api_key = '123456';
    const userApiKey = req.query.api_key;
    if(userApiKey && (userApiKey === api_key)){
        next();
    } else {
        res.json({ message: 'Not Allowed!'});
    }
}

module.exports = apiKey