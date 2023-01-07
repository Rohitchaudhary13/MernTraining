import {configureStore} from '@reduxjs/toolkit'
import sneakerReducer from '../features/sneaker/sneakerSlice';
import shirtReducer from '../features/shirt/shirtSlice';
import userReducer from '../features/user/userSlice';
const store = configureStore({
    reducer: {
        sneaker: sneakerReducer,
        user: userReducer,
        shirt: shirtReducer,
    },
})

export default store;