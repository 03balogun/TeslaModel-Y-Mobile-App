import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from './style';

import LogoGrey from '../../assets/images/logo-grey.svg';
import BlackCar from '../../assets/images/black-car.svg';
import Button from '../../components/Button';

const Index = ({navigation}) => {
  //
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeIn" delay={1500} style={styles.logoRow}>
        <LogoGrey />
      </Animatable.View>
      <ScrollView>
        <View style={{marginTop: 25}}>
          <View style={{alignItems: 'center'}}>
            <Animatable.Text animation="fadeInUp" style={styles.topText}>
              Tesla
            </Animatable.Text>
          </View>
          <View style={styles.titleRow}>
            <Animatable.Text
              animation="fadeInRight"
              delay={1000}
              style={{
                ...styles.bottomText,
                fontSize: 28,
                color: '#292929',
                position: 'relative',
                left: -32,
              }}>
              Model X
            </Animatable.Text>
            <Animatable.Text animation="fadeInUp" style={styles.bottomText}>
              Model Y
            </Animatable.Text>
            <Animatable.Text
              animation="fadeInLeft"
              delay={1000}
              style={{
                ...styles.bottomText,
                fontSize: 28,
                color: '#292929',
                position: 'relative',
                right: -43,
              }}>
              Roadster
            </Animatable.Text>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <BlackCar />
          <View>
            <View style={styles.carDetailsRow}>
              <Animatable.View delay={2000} animation="fadeInLeft">
                <Text style={[styles.textMedium36, {color: '#FFF'}]}>
                  300 mi
                </Text>
                <Text style={[styles.textRegular14, {color: '#FFF'}]}>
                  Range (EPA est.)
                </Text>
              </Animatable.View>
              <View
                style={{borderWidth: 1, borderColor: '#FFF', opacity: 0.3}}
              />
              <Animatable.View delay={2000} animation="fadeInRight">
                <Text style={[styles.textMedium36, {color: '#FFF'}]}>AWD</Text>
                <Text style={[styles.textRegular14, {color: '#FFF'}]}>
                  Dual Motor
                </Text>
              </Animatable.View>
            </View>
            <View style={styles.carBottomDetails}>
              <Text style={styles.bottomTextOuter}>
                Acceleration:{' '}
                <Text style={styles.bottomTextInner}>0-60 mph in 3.5s</Text>
              </Text>
              <Text style={styles.bottomTextOuter}>
                Top speed:{' '}
                <Text style={styles.bottomTextInner}>up to 150 mph</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Animatable.View
        delay={3000}
        animation="fadeInUp"
        style={styles.buttonContainer}>
        <Button
          style={{width: 300}}
          textStyle={{color: '#FFF'}}
          label="ORDER NOW"
          action={() => navigation.navigate('OrderScreen')}
        />
      </Animatable.View>
    </View>
  );
};

export default Index;
