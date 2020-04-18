import React from 'react';
import {View, Text, Dimensions, ScrollView, Image} from 'react-native';
import Button from '../components/Button';
import styles from '../assets/styles/scene';

const BACKGROUND_HEIGHT = Dimensions.get('window').height / 2;
const BACKGROUND_WIDTH = Dimensions.get('window').width;

export default ({navigation}) => {
  return (
    <ScrollView>
      <View style={[styles.scene, {justifyContent: 'space-between'}]}>
        <Image
          source={require('../assets/images/autopilot.png')}
          style={{width: BACKGROUND_WIDTH, height: BACKGROUND_HEIGHT}}
          resizeMode="cover"
        />
        <View style={[styles.bottomSection, styles.floatTop]}>
          <Text style={styles.headerText}>Autopilot</Text>
          <View style={styles.labelRow}>
            <View>
              <Text style={styles.textRegular28}>Full Self-Driving</Text>
              <Text style={{...styles.descriptionValue}}>$5,000</Text>
            </View>
            <View>
              <Text style={[styles.textRegular28, {color: '#919395'}]}>
                Auto Pilot
              </Text>
              <Text style={[styles.descriptionValue, {color: '#A4B0BC'}]}>
                $3,000
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.textRegular18,
              {
                lineHeight: 24,
                color: '#979797',
                marginTop: 24,
              },
            ]}>
            Automatic driving from highway on-ramp to off-ramp including
            interchanges and overtaking slower cars.
          </Text>

          <View style={styles.footerContentRow}>
            <Text style={styles.textRegular28}>$60,700</Text>
            <Button
              action={() => {
                navigation.navigate('CheckoutScreen');
              }}
              label="NEXT"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
