import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    numOfSneakers: 10
}
const sneakerSlice = createSlice({
    name: 'sneaker',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfSneakers--
        },
        restocked: (state, action) => {
            state.numOfSneakers += action.payload
        }
    }
})

export default sneakerSlice.reducer;
export const { ordered, restocked }  = sneakerSlice.actions