import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';
import styles from '../assets/styles/scene';
import LinearGradient from 'react-native-linear-gradient';

const selectedStyle = {
  borderWidth: 2,
  borderColor: '#A7A8AB',
  borderRadius: 50,
};
const buttons = {
  white: {
    colors: ['#FEFEFE', '#E5E5E5'],
    selected: selectedStyle,
  },
  black: {
    colors: ['#666666', '#020202'],
    selected: selectedStyle,
  },
};
const buttonKeys = Object.keys(buttons);

const BACKGROUND_HEIGHT = Dimensions.get('window').height / 2;
const BACKGROUND_WIDTH = Dimensions.get('window').width;

export default ({jumpTo}) => {
  const [selected, changeSelected] = useState('white');
  return (
    <ScrollView>
      <View style={[styles.scene, {justifyContent: 'space-between'}]}>
        <Image
          source={require('../assets/images/interior.png')}
          resizeMode="cover"
          style={{height: BACKGROUND_HEIGHT, width: BACKGROUND_WIDTH}}
        />
        <View style={[styles.bottomSection, styles.floatTop]}>
          <Text style={styles.headerText}>Select Color</Text>
          <View style={styles.labelRow}>
            <View>
              <Text style={styles.textRegular28}>Black and White</Text>
              <Text style={{...styles.descriptionValue}}>$1,000</Text>
            </View>
            <View>
              <Text style={[styles.textRegular28, {color: '#919395'}]}>
                All Black
              </Text>
              <Text style={[styles.descriptionValue, {color: '#A4B0BC'}]}>
                Included
              </Text>
            </View>
          </View>
          <View style={styles.interiorColorRow}>
            {buttonKeys.map((button) => {
              return (
                <TouchableOpacity
                  key={button}
                  onPress={() => changeSelected(button)}>
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
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.footerContentRow}>
            <Text style={styles.textRegular28}>$58,700</Text>
            <Button action={() => jumpTo('Autopilot')} label="NEXT" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
