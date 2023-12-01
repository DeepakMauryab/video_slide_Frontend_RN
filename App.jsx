import Main from './src/navigation/Main';
import {Provider} from 'react-redux';
import store from './src/redux/store/Store';
import Loader from './src/utilities/Loader/Loader';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
      <Loader />
    </Provider>
  );
};

export default App;
