import {createSlice} from '@reduxjs/toolkit';
import { ordered as shirtOrdered } from '../shirt/shirtSlice';
const initialState = {
    numOfShirts: 20
}
const shirtSlice = createSlice({
    name: 'shirt',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfShirts--
        },
        restocked: (state, action) => {
            state.numOfShirts += action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(shirtOrdered, state => {
            state.numOfShirts--
        })
    }
})

export default shirtSlice.reducer;
export const { ordered, restocked }  = shirtSlice.actions