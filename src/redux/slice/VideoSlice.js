import { createSlice } from '@reduxjs/toolkit';
import { getVideos } from '../../api/Api';

const initialState = {
  data: [],
  userVideos: null,
  error: null,
  loading: false,
};

const videos = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    deleteVideo: (state, { payload }) => {
      state.userVideos = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getVideos.pending, state => {
      state.loading = true;
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      const getData = [...state.data, ...action.payload];
      state.data = [...new Set(getData)];
      state.loading = false;
    });
    builder.addCase(getVideos.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { deleteVideo } = videos.actions;

export default videos.reducer;
