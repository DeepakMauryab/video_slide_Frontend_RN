import { View, Text, StyleSheet } from 'react-native';
import Fonts from "../../constant/Fonts";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#000', fontFamily: Fonts.Regular }}>Click on Feed To See Reels</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
