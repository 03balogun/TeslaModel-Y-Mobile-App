import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Button from '../components/Button';
import styles from '../assets/styles/scene';

import WhiteCar from '../assets/images/white-car.svg';

export default ({jumpTo}) => (
  <View style={[styles.scene, {backgroundColor: '#E9E9E9'}]}>
    <ScrollView>
      <View style={{margin: 40}}>
        <Text style={styles.headerText}>Select your card</Text>
      </View>
      <Animatable.View animation="fadeInRight" delay={100}>
        <WhiteCar width={Dimensions.get('window').width} />
      </Animatable.View>
      <View style={styles.descriptionTextRow}>
        <View>
          <Text style={styles.textRegular28}>Performance</Text>
          <Text style={{...styles.descriptionValue}}>$55,700</Text>
        </View>
        <View>
          <Text style={[styles.textRegular28, {color: '#919395'}]}>
            Long Range
          </Text>
          <Text style={[styles.descriptionValue, {color: '#A4B0BC'}]}>
            $46,700
          </Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.bottomSectionContentRow}>
          <View>
            <Text style={styles.textRegular36}>3.5s</Text>
            <Text style={[styles.textRegular14, {marginTop: 8}]}>
              0 - 60mph
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View>
            <Text style={styles.textMedium36}>150mph</Text>
            <Text style={[styles.textRegular14, {marginTop: 8}]}>
              Top Speed
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.textRegular18,
            {
              lineHeight: 24,
              color: '#979797',
              marginTop: 30,
            },
          ]}>
          Tesla All-Wheel Drive has two independent motors. Unlike traditional
          all-wheel drive systems, these two motors digitally control torque to
          the front and rear wheels—for far better handling and traction
          control.
        </Text>
        <View style={styles.footerContentRow}>
          <Text style={styles.textRegular28}>$55,700</Text>
          <Button action={() => jumpTo('Exterior')} label="NEXT" />
        </View>
      </View>
    </ScrollView>
  </View>
);
