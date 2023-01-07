const configureStore = require('@reduxjs/toolkit').configureStore;
const sneakerReducer = require('../features/sneaker/sneakerSlice');
const shirtReducer = require('../features/shirt/shirtSlice');
const store = configureStore({
    reducer: {
        sneaker: sneakerReducer,
        shirt: shirtReducer,
    }
})
module.exports = store