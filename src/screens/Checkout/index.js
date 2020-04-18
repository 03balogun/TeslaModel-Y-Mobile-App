import React from 'react';
import {View, Text, Dimensions, ImageBackground} from 'react-native';
import Button from '../../components/Button';

import LogoWhite from '../../assets/images/logo-white.svg';
import AppleLogo from '../../assets/images/logo-apple.svg';
import styles from './style';

const BACKGROUND_HEIGHT = Dimensions.get('window').height / 1.6;

export default () => {
  return (
    <View style={{justifyContent: 'space-between'}}>
      <ImageBackground
        source={require('../../assets/images/cover.png')}
        resizeMode="cover"
        style={{height: BACKGROUND_HEIGHT}}>
        <View style={styles.checkoutHeader}>
          <LogoWhite />
        </View>
      </ImageBackground>
      <View style={[styles.bottomSection]}>
        <Text style={[styles.textRegular28, {color: '#A4B0BC'}]}>Summary</Text>
        <View
          style={{
            marginTop: '10%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.textMedium48, {color: '#FFF'}]}>
            Your Model Y
          </Text>
          <Text
            style={[styles.textRegular36, {color: '#FFF', marginTop: '5.3%'}]}>
            $60,700
          </Text>
        </View>
        <View style={{marginTop: 50}}>
          <Button action={() => {}} style={{width: 300}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AppleLogo />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginLeft: 15,
                }}>
                Pay
              </Text>
            </View>
          </Button>
        </View>
      </View>
    </View>
  );
};
