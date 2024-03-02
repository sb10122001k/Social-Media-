/* eslint-disable prettier/prettier */
import { StyleSheet, TextInput, View, Text, SafeAreaView } from 'react-native';
import LoginHeader from '../components/loginHeder';
import { useState } from 'react';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError,setConfirmPasswordError]= useState(false)
    const handleSignUp = () =>{
        if(email === '' || name ==='' || phone ==='' || password === '' || confirmPassword === '' )
        {
            setFormError(true);
        }
        else if(confirmPassword !== password)
        {
            setConfirmPasswordError(true);
        }
        else 
        {
            // Do api call here to submit the data 
            // Store the data in local storage 
        }

    }
    const [formError, setFormError] = useState('')
    return (
        <ScrollView style={{ flex: 1 }}>
            <LoginHeader mainText="Create Account" secondText="Enter Your Data" />
           
                <View style={style.inputData}>

                    <TextInput
                        value={name}
                        placeholder="Name"
                        style={[style.inputBox, formError && name === '' && { borderColor: 'red' }]}
                        placeholderTextColor={'#ACA7A7'}
                        onChangeText={(text) => { setName(text) }}
                    />

                    <TextInput
                        value={email}
                        placeholder="Email"
                        style={[style.inputBox, formError && email === '' && { borderColor: 'red' }]}
                        textContentType="emailAddress"
                        placeholderTextColor={'#ACA7A7'}
                        onChangeText={(text) => { setEmail(text); }}
                    />
                    <TextInput
                        value={phone}
                        placeholder="Phone Number"
                        style={[style.inputBox, formError && phone === '' && { borderColor: 'red' }]}
                        textContentType="emailAddress"
                        keyboardType='phone-pad'
                        placeholderTextColor={'#ACA7A7'}
                        onChangeText={(text) => { setPhone(text); }}
                    />
                    <TextInput
                        value={password}
                        placeholder="Password"
                        secureTextEntry={true}
                        style={[style.inputBox, formError && password === '' && { borderColor: 'red' }]}
                        placeholderTextColor={'#ACA7A7'}
                        onChangeText={(text) => { setPassword(text); }}
                    />
                    <TextInput
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        style={[style.inputBox, formError && confirmPassword === '' && { borderColor: 'red' }]}
                        placeholderTextColor={'#ACA7A7'}
                        onChangeText={(text) => { setConfirmPassword(text); }}
                    />
                    {confirmPasswordError &&
                        <Text style={{color:'red'}}>
                            Your Password Does not match
                        </Text>
                    }
                </View>

            
            <View style={style.inputData}>
                <TouchableOpacity style={style.signUpStyle} onPress={handleSignUp} >
                    <Text style={style.signUpText}>SignUp</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};
const style = StyleSheet.create({
    inputData: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: '5%',        
    },
    inputBox: {
        width: '80%',
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#64C3BF',
        padding: '2%',
        paddingLeft: '5%',
    },
    signUpStyle: {
        width: 199,
        height: 40,
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#64C3BF',
        borderRadius: 10,
    },
    signUpText: {
        color: '#FFF',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '500',
    }
})

export default SignUp;
