import {createSlice} from '@reduxjs/toolkit';

const albumsSlice = createSlice({
    name: 'allAlbums',
    initialState:[],
    reducers:{
        saveAllAlbums:(state, action) => state = action.payload
    }
})

export const {saveAllAlbums} = albumsSlice.actions;
export default albumsSlice.reducer;