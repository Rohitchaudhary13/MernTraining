const {createSlice} = require('@reduxjs/toolkit');
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
    }
})

module.exports = shirtSlice.reducer;
module.exports.shirtActions = shirtSlice.actions;