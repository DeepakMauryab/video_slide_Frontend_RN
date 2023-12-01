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
      state.loading = false;
      state.data = [...state.data, ...action.payload];
    });
    builder.addCase(getVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { deleteVideo } = videos.actions;

export default videos.reducer;
