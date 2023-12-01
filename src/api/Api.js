import { createAsyncThunk } from '@reduxjs/toolkit';
import VideoServices from './Services';

export const getVideos = createAsyncThunk('videos', async (params) => {
  try {
    const data = await VideoServices.getAllVideos(params);
    return data.data;
  } catch (error) {
    console.log('video error', error);
    return [];
  }
});
export const uploadVideoApi = createAsyncThunk(
  'createVideo',
  async (params, navigation) => {
    console.log(params);
    try {
      const data = await VideoServices.createVideo(params);
      console.log(data);
      // return data.data;
    } catch (error) {
      console.log('create video error', error);
      return [];
    }
  },
);
