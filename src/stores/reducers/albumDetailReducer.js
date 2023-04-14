import {createSlice} from '@reduxjs/toolkit';

const albumsDetailSlice = createSlice({
    name: 'albumDetail',
    initialState:[],
    reducers:{
        saveAlbumDetail:(state, action) => state = action.payload
    }
})

export const {saveAlbumDetail} = albumsDetailSlice.actions;
export default albumsDetailSlice.reducer;