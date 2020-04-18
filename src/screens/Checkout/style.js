import {StyleSheet} from 'react-native';
import shared from '../../assets/styles/shared.js';

export default StyleSheet.create({
  ...shared,
  checkoutHeader: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  bottomSection: {
    backgroundColor: '#000',
    height: '45%',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    position: 'relative',
    top: -50,
    paddingTop: 48,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
});
