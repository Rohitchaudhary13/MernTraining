const createSlice = require('@reduxjs/toolkit').createSlice;

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

module.exports = sneakerSlice.reducer;
module.exports.sneakerActions = sneakerSlice.actions;