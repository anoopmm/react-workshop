import { StyleSheet, Dimensions } from 'react-native';
import variables from '../../native-base-theme/variables/platform';

const deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  mainView: {
    flex: 1,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  image: {
    height: deviceWidth * 0.43,
    width: deviceWidth * 0.28,
  },
  containerView:{
    width: deviceWidth * 0.28,
  },
  titleView: {
    paddingTop: 8,
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 14,
    color: variables.cardTitleColor,
    fontWeight: '200',
    textAlign: 'left',
  },
});
