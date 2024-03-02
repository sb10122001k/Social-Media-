/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View , Text, Image, StyleSheet, Touchable, TextInput} from 'react-native';
import LoginHeader from '../components/loginHeder';
import login from '../assets/login.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { storage } from '../utils/storage';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [formError,setFormError] = useState(false);
    const navigation = useNavigation();
    const handleLogin = () =>{
        if (email === '' || password === '')
        {
            setFormError(true);
        }
        else
        {
            //Do Api call here to send the data into backend
            //Store the Authentication Token into localstorage
            storage.set("Email",email)
            storage.set("login",true)
            navigation.navigate('Home')

        }
    };
  return (
  <SafeAreaView style={style.mainView}>
      <LoginHeader  mainText="Welcome Back!" secondText ="Login"/>
      <View style={style.seconView}>
      <Image source={login}/>
        <TextInput
            value={email}
            placeholder="Email"
            style={[style.inputBox,formError && email ==='' && {borderColor:'red'}]}
            textContentType="emailAddress"
            placeholderTextColor={'#ACA7A7'}
            onChangeText={(text)=>{setEmail(text);}}
        />
        <TextInput
            value={password}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            style={[style.inputBox,formError && password ==='' && {borderColor:'red'}]}
            placeholderTextColor={'#ACA7A7'}
            onChangeText={(text)=>{setPassword(text);}}
        />

        <TouchableOpacity style={[style.signUpStyle , {backgroundColor:'#fff'}]} onPress={handleLogin} >
          <Text style={[style.signUpText,{color:'#64C3BF'}]}>Login</Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>

  );
};
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
    gap:10,
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
  },
  inputBox:{
    width:250,
    backgroundColor:'#fff',
    color:'black',
    borderRadius:5,
    borderWidth: 2,
    borderColor: '#64C3BF',
    padding:'2%',
    paddingLeft:'5%',
  },
});

export default Login;
