import Main from './src/navigation/Main';
import {Provider, useDispatch} from 'react-redux';
import store from './src/redux/store/Store';
import Loader from './src/utilities/Loader/Loader';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import StateModal from './src/components/StateModal';
import {useEffect} from 'react';
import {setModalState} from './src/redux/slice/UserActionsSlice';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Main />
          <Loader />
          <StateModal />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
