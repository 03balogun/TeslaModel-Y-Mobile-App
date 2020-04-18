import {StyleSheet} from 'react-native';
import shared from './shared';

export default StyleSheet.create({
  ...shared,
  container: {
    backgroundColor: '#F2F5F8',
    flex: 1,
  },
  headerText: {color: '#A4B0BC', ...shared.textRegular24},
  descriptionTextRow: {
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionValue: {
    ...shared.textRegular28,
    color: '#D01000',
    marginTop: 10,
  },
  bottomSection: {
    marginTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    backgroundColor: '#FFF',
    minHeight: 350,
  },
  bottomSectionContentRow: {
    marginTop: 48,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  floatTop: {position: 'relative', top: '-5%', height: '100%', paddingTop: 48},
  labelRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 32,
  },
  footerContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 39,
    marginBottom: 39,
  },
  colorSelectionRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    alignItems: 'center',
  },
  interiorColorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 130,
    marginTop: 40,
  },
  roundedButton: {
    width: 49,
    height: 49,
    borderRadius: 50,
  },
  colorSelected: {
    width: 58,
    height: 58,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#C30F00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalLine: {borderWidth: 1, borderColor: '#000', opacity: 0.3},
  horizontalLine: {
    width: '100%',
    borderWidth: 1,
    marginTop: 48,
    marginBottom: 40,
    borderColor: '#CFD3D9',
  },
});
