const axios = require('axios');
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    loading: false,
    users: [],
    error: '',
}

const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    axios.get('link').then((response) => response.data.map((user) => user.id))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, state => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        })
        builder.addCase(fetchUsers.rejected, state => {
            state.loading = false;
            state.users = [];
            state.error = error.message;
        })
    }
})

module.exports = userSlice.reducer;
module.exports.userActions = userSlice.actions;