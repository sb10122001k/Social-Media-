/* eslint-disable prettier/prettier */
  import React from 'react'
  import { View , Text, Image, StyleSheet, Touchable} from 'react-native'
  import LoginHeader from '../components/loginHeder';
  import login from '../assets/login.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
  const WelcomeScreen = () => {
    const navigation = useNavigation();
    const handleLoginClicck = () =>{
      navigation.navigate("Login")
    }
    const handleSignUpClick = () =>{
      navigation.navigate("SignUp")
    }
    return (
    <SafeAreaView style={style.mainView}>
        <LoginHeader mainText='Welcome!' secondText ='Find the things that you Love!'/>
        <View style={style.seconView}>
        <Image source={login}/>
          <TouchableOpacity style={style.signUpStyle} onPress={handleSignUpClick} >
            <Text style={style.signUpText}>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.signUpStyle , {backgroundColor:'#fff'}]}  onPress={handleLoginClicck}>
            <Text style={[style.signUpText,{color:'#64C3BF'}]}>Login</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
    
    )
  }
  const style = StyleSheet.create({
    mainView:{
      flex:1,
    },
    seconView:{
      alignItems:'center',
      justifyContent:'center',
      flex:1,
      width:'100%',
      height:'100%',
      gap:10
    },
    signUpStyle:{
      width:199,
      height:40,
      marginTop:'5%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#64C3BF',
      borderRadius:10,
    },
    signUpText:{
      color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '500',
    }
  })

export default WelcomeScreen;