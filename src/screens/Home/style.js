import {Dimensions, StyleSheet} from 'react-native';
import shared from '../../assets/styles/shared';

export default StyleSheet.create({
  ...shared,
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  logoRow: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  topText: {
    fontSize: 36,
    color: '#FFF',
    fontFamily: 'GothamPro-Light',
    marginBottom: 24,
  },
  bottomText: {
    fontSize: 48,
    color: '#FFF',
    fontFamily: 'GothamPro',
  },
  carImage: {width: Dimensions.get('window').width},
  carDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  carBottomDetails: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 57,
  },
  bottomTextOuter: {
    fontFamily: 'GothamPro',
    fontSize: 16,
    color: '#979797',
    marginBottom: 16,
  },
  bottomTextInner: {color: '#FFF'},
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
});
