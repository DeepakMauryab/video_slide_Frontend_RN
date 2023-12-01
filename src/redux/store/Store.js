import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import videos from '../slice/VideoSlice';

const isSerializable = value => Iterable.isIterable(value) || isPlain(value);

const getEntries = value =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value);
const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
});

const store = configureStore({
  reducer: {
    video: videos,
    middleware: [serializableMiddleware],
  },
});

export default store;
