import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../components/Button';
import styles from '../assets/styles/scene';

import WhiteCar from '../assets/images/white-car.svg';
import RedCar from '../assets/images/red-car.svg';
import * as Animatable from 'react-native-animatable';

const SELECTED_STYLE = {
  borderWidth: 2,
  borderColor: '#A7A8AB',
  borderRadius: 50,
};
const buttons = {
  black: {
    colors: ['#666666', '#020202'],
    selected: SELECTED_STYLE,
  },
  grey: {
    colors: ['#5F717F', '#333D44'],
    selected: SELECTED_STYLE,
  },
  blue: {
    colors: ['#0567D0', '#03359F'],
    selected: SELECTED_STYLE,
  },
  white: {
    colors: ['#FEFEFE', '#E5E5E5'],
    selected: SELECTED_STYLE,
  },
  red: {
    colors: ['#E21600', '#BE0A00'],
    selected: SELECTED_STYLE,
  },
};
const buttonKeys = Object.keys(buttons);

export default ({jumpTo}) => {
  const [selected, changeSelected] = useState('white');

  let carAnimationRef;

  return (
    <View style={[styles.scene, {backgroundColor: '#E9E9E9'}]}>
      <ScrollView>
        <View style={{margin: 40}}>
          <Text style={styles.headerText}>Select Color</Text>
        </View>
        <Animatable.View
          ref={(ref) => (carAnimationRef = ref)}
          animation="fadeInRight"
          easing="ease-in-out"
          delay={1000}
          useNativeDriver>
          {selected === 'red' ? (
            <RedCar width={Dimensions.get('window').width} />
          ) : (
            <WhiteCar width={Dimensions.get('window').width} />
          )}
        </Animatable.View>
        <View style={[styles.descriptionTextRow, {flexDirection: 'column'}]}>
          <View>
            <Text style={styles.textRegular28}>Pearl White Multi-Coat</Text>
            <Text style={{...styles.descriptionValue}}>$2,000</Text>
          </View>
          <View style={styles.colorSelectionRow}>
            {buttonKeys.map((button) => {
              return (
                <TouchableWithoutFeedback
                  key={button}
                  onPress={() => {
                    changeSelected(button);
                    carAnimationRef.fadeInRight();
                  }}>
                  <View
                    style={[button === selected ? styles.colorSelected : null]}>
                    <LinearGradient
                      colors={buttons[button].colors}
                      start={{x: 0.9, y: 0}}
                      end={{x: 0.5, y: 0.9}}
                      locations={[0, 1]}
                      style={[
                        styles.roundedButton,
                        button === selected ? buttons[button].selected : null,
                      ]}
                    />
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
          <View style={styles.horizontalLine} />
          <Text style={styles.textRegular18}>20" Performance Wheels</Text>
          <Text style={[styles.textRegular18, {marginTop: 16}]}>
            Carbon fiber spoiler
          </Text>
        </View>
        <View style={[styles.bottomSection, {height: 130}]}>
          <View style={styles.footerContentRow}>
            <Text style={styles.textRegular28}>$57,700</Text>
            <Button action={() => jumpTo('Interior')} label="NEXT" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
