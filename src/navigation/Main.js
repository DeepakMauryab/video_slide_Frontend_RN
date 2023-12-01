import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from '../constant/Screens';
import BottomTab from './BottomTab';
import UploadVideo from '../Screens/UploadVideo/UploadVideo';
import SplashScreen from '../utilities/Splash/SplashScreen';

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator

        initialRouteName={Screens.SplashScreen}
        // initialRouteName={Screens.UploadVideo}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.BottomTab} component={BottomTab} />
        <Stack.Screen
          name={Screens.SplashScreen}
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Screens.UploadVideo}
          component={UploadVideo}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
