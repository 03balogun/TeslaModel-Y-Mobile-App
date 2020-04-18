import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

const styles = StyleSheet.create({
  buttonWrapper: {
    borderWidth: 2,
    borderColor: '#D01000',
    borderRadius: 50,
    height: 60,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontFamily: 'GothamPro-Medium',
    fontSize: 20,
  },
});

export default ({label, style, textStyle, action, children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => action()}>
      <View style={{...styles.buttonWrapper, ...style}}>
        {label && (
          <Text style={{...styles.buttonText, ...textStyle}}>{label}</Text>
        )}
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};
