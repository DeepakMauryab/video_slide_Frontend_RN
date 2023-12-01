import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from '../constant/Screens';
import Home from '../Screens/home/Home';
import VideoHandler from '../Screens/VideoHandler/VideoHandler';
import { Image } from 'react-native';
import Library from '../Screens/library/Library';
import Subscription from '../Screens/subscription/Subscription';
import TabMainButton from './TabMainButton';
import commonStyle from "../Style/common";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const size = 20;
  return (
    <Tab.Navigator
      initialRouteName={Screens.home}
      screenOptions={{
        headerShown: false,
        tabBarStyle: commonStyle.tabBar,
        tabBarLabelStyle: commonStyle.tabLabel,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#fff',
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name={Screens.home}
        component={Home}
        options={{
          tabBarIcon: ({ }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../Assets/tabIcon/home.png')}
                tintColor={'#fff'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screens.videoHandler}
        component={VideoHandler}
        options={{
          title: 'Feed',
          tabBarIcon: ({ }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                tintColor={'#fff'}
                source={require('../Assets/tabIcon/video.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screens.TabMainButton}
        component={VideoHandler}
        options={{
          tabBarButton: props => {
            return <TabMainButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        name={Screens.Subscription}
        component={Subscription}
        options={{
          // title: 'Feed',
          tabBarIcon: ({ }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                tintColor={'#fff'}
                source={require('../Assets/tabIcon/subscription.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screens.Library}
        component={Library}
        options={{
          // title: 'Feed',
          tabBarIcon: ({ }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                tintColor={'#fff'}
                source={require('../Assets/tabIcon/library.png')}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen name={Screens.home} component={Home} /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;
