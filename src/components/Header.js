import React from 'react';

import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import ArrowRight from '../assets/images/arrow-right.svg';
import LogoBlack from '../assets/images/logo-black.svg';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F5F8',
    flex: 1,
  },
  header: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: '#FFF',
  },
  backButton: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ({navigation}) => {
  return (
    <View style={styles.header}>
      <View style={{position: 'absolute', left: '5%'}}>
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <ArrowRight />
          </View>
        </TouchableNativeFeedback>
      </View>
      <LogoBlack />
    </View>
  );
};
