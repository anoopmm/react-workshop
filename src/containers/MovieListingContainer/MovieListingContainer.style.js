import { StyleSheet, Dimensions } from 'react-native';
import variables from '../../native-base-theme/variables/platform';

const deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: '#212121',

  },
  navBar: {
    width: deviceWidth,
    height: deviceWidth * 0.16,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    flexDirection: 'row',
  },
  listStyle: {
    paddingTop: deviceWidth * 0.16,
    paddingBottom: deviceWidth * 0.16,
  },
  backImage: {
    width: deviceWidth * 0.06,
    height: deviceWidth * 0.06,
  },
  leftIconView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: deviceWidth * 0.015,
  },
  rightIconView: {
    flex: 1,
    justifyContent: 'center',
  },
  titleView: {
    flex: 5,
    justifyContent: 'center',
  },
  titleText:{
    fontSize:16
  }
});
