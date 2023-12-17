import {Text, View} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import styles from '../../Style/Styles';
import {useDispatch, useSelector} from 'react-redux';
import ButtonComponent from '../../components/ButtonComponent';
import {logoutUser} from '../../redux/slice/UserSlice';
import Header from './componets/header';
import commonStyle from '../../Style/common';
import {useState} from 'react';

const Home = ({navigation}) => {
  const {userDetail} = useSelector(s => s.Users);
  console.log(userDetail);
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <Header />
        <View style={commonStyle.videoListing}>
          {videos?.map((item, ind) => {
            return <View key={ind} style={commonStyle.videoListBox}></View>;
          })}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Home;

// const onPress = useCallback(() => {
//   const isActive = bottomSheetRef?.current?.isActive();
//   if (isActive) {
//     bottomSheetRef?.current?.scrollTo(0);
//   } else {
//     bottomSheetRef?.current?.scrollTo(-200);
//   }
// }, []);

//<BottomSheet ref={bottomSheetRef}>
//   <View style={{ flex: 1, backgroundColor: 'orange' }} />
// </BottomSheet>
