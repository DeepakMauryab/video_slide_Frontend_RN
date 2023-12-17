import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from '../constant/Screens';
import BottomTab from './BottomTab';
import UploadVideo from '../Screens/UploadVideo/UploadVideo';
import SplashScreen from '../utilities/Splash/SplashScreen';
import Login from "../Screens/authentication/login/Login";
import SignUp from "../Screens/authentication/signup/SignUp";

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.SplashScreen}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.BottomTab} component={BottomTab} />
      <Stack.Screen name={Screens.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={Screens.UploadVideo} component={UploadVideo} />
      <Stack.Screen name={Screens.login} component={Login} />
      <Stack.Screen name={Screens.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default Main;
