/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Path, Svg } from 'react-native-svg';

const LoginHeader = (data) => {
  console.log(data)
  return (
    <View>
      <View style={{ position: 'absolute', zIndex: 2 }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="375" height="95" viewBox="0 0 375 95" fill="none">
          <Path d="M0 0H375V86.2585C312.906 -72.3509 261.7 135.604 0 86.2585V0Z" fill="#64C3BF" />
        </Svg>
      </View>
      <View style={{ position: 'absolute', zIndex: 1, marginTop: '3%' }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="375" height="106" viewBox="0 0 375 106" fill="none">
          <Path d="M0 0.390442H375V96.8366C312.906 -80.5056 261.7 152.01 0 96.8366V0.390442Z" fill="#BBE8E5" />
        </Svg>
      </View>
      <TouchableOpacity style={{zIndex:3,position:'absolute',marginTop: '3%',marginLeft:'10%' }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
          <Path d="M3.57347 7.78944L10.6656 2.39529C10.9486 2.17826 11.126 1.86768 11.1587 1.53157C11.1914 1.19545 11.0769 0.861197 10.8402 0.601997C10.6035 0.342797 10.2639 0.179777 9.89579 0.148635C9.52768 0.117494 9.16105 0.220769 8.87618 0.435845L0.496583 6.8097C0.339459 6.92952 0.213071 7.07936 0.126344 7.24865C0.0396176 7.41794 -0.00533295 7.60255 -0.00533295 7.78943C-0.00533295 7.97631 0.0396176 8.16092 0.126344 8.33021C0.213071 8.4995 0.339459 8.64934 0.496583 8.76916L8.87618 15.143C9.16092 15.3591 9.52799 15.4632 9.89677 15.4324C10.2655 15.4017 10.6059 15.2386 10.843 14.9789C11.0801 14.7193 11.1946 14.3844 11.1613 14.0477C11.128 13.7111 10.9497 13.4003 10.6656 13.1835L3.57347 7.78944Z" fill="white" />
        </Svg>
      </TouchableOpacity>
      <View style={style.headerTextView}>
        <Text style={style.headerMainText}>
        {data.mainText}
        </Text>
        <Text style={style.headerSecondText}>
        {data.secondText}
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  headerTextView:{
    marginTop:'40%',
    alignContent:'center',
    alignItems:'center',
  },
  headerMainText:{
    color:'#64C3BF',
    fontFamily:'Inter',
    fontWeight:'700',
    fontSize:40,
  },
  headerSecondText:{
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',

  },
});

export default LoginHeader;
