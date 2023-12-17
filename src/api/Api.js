import {createAsyncThunk} from '@reduxjs/toolkit';
import VideoServices from './Services';
import UserServices from './services/UserServices';
import {loginUserData, setUserDetails} from '../redux/slice/UserSlice';
import Screens from '../constant/Screens';
import {setModalState} from '../redux/slice/UserActionsSlice';

export const getVideos = createAsyncThunk('videos', async params => {
  try {
    const res = await VideoServices.getAllVideos(params);
    return res.data.data;
  } catch (error) {
    console.log('video error', error);
    return [];
  }
});
export const uploadVideoApi = createAsyncThunk(
  'createVideo',
  async (params, navigation) => {
    try {
      const data = await VideoServices.createVideo(params);
    } catch (error) {
      console.log('create video error', error);
      return [];
    }
  },
);

export const createUser = createAsyncThunk(
  'createUser',
  async ({payload, navigation}, {dispatch}) => {
    try {
      const res = await UserServices.createUser(payload);
      if (res.status == 201) {
        dispatch(
          setModalState({
            action: true,
            message: 'Sign up Successfull',
            para: 'enjoy and explore the reels',
            status: 'success',
          }),
        );
        navigation.navigate(Screens.BottomTab);
        return res.data.data;
      }
    } catch (error) {
      if (error.response.status == 409) {
        dispatch(
          setModalState({
            action: true,
            message: 'User Exists',
            para: 'mobile number already registered, please login.',
            status: 'error',
          }),
        );
      }
    }
  },
);
export const loginUser = ({params, navigation}) => {
  return async dispatch => {
    try {
      const res = await UserServices.login(params);
      if (res.status == 200) {
        dispatch(
          setModalState({
            action: true,
            message: 'Login Succesfull',
            para: 'enjoy and explore the reels',
            status: 'success',
          }),
        );
        navigation.navigate(Screens.BottomTab);
        dispatch(loginUserData(res.data.data));
      }
    } catch (error) {
      if (error.response.status == 404) {
        dispatch(
          setModalState({
            action: true,
            message: 'Invalid Credentials',
            para: 'you are not registered yet please register Yourself',
            status: 'error',
          }),
        );
      } else if (error.response.status == 406) {
        dispatch(
          setModalState({
            action: true,
            message: 'Wrong Password',
            para: 'please enter correct password to login',
            status: 'error',
          }),
        );
      } else {
        dispatch(
          setModalState({
            action: true,
            message: 'Something Wrong',
            para: 'Retry after some time',
            status: 'error',
          }),
        );
      }
    }
  };
};
