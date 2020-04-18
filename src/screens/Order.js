import React, {Fragment} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
const {width} = Dimensions.get('window');
import Header from '../components/Header';
import Car from '../scenes/Car';
import Exterior from '../scenes/Exterior';
import Interior from '../scenes/Interior';
import Autopilot from '../scenes/AutoPilot';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F5F8',
    flex: 1,
  },
  scene: {
    flex: 1,
  },
  textRegular18: {fontFamily: 'GothamPro', fontSize: 18},
});

const guidelineBaseWidth = 350;
const scale = (size) => (width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const initialLayout = {width: Dimensions.get('window').width};

export default ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Car', title: '1. Car'},
    {key: 'Exterior', title: '2. Exterior'},
    {key: 'Interior', title: '3. Interior'},
    {key: 'Autopilot', title: '4. Autopilot'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'Car':
        return <Car jumpTo={jumpTo} />;
      case 'Exterior':
        return <Exterior jumpTo={jumpTo} />;
      case 'Interior':
        return <Interior jumpTo={jumpTo} />;
      case 'Autopilot':
        return <Autopilot navigation={navigation} jumpTo={jumpTo} />;
    }
  };

  const renderLabel = ({route, focused, color}) => {
    return (
      <Text
        style={{
          color,
          ...styles.textRegular18,
          fontSize: moderateScale(14),
          // fontWeight: focused ? 'bold' : '400',
        }}>
        {route.title}
      </Text>
    );
  };

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: '#D01000',
        }}
        style={{backgroundColor: '#FFF'}}
        renderLabel={renderLabel}
        activeColor="#000"
        inactiveColor="#CCCCCC"
      />
    );
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    </Fragment>
  );
};
