/* eslint-disable prettier/prettier */
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import LoginHeader from '../components/loginHeder';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CreatePost = () => {
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const cameraLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, res => {
            if (!res.didCancel && !res.error) {
                setImage({
                    uri: res.assets[0].uri,
                    type: res.assets[0].type,
                    name: res.assets[0].fileName,
                });
            }
        });
    };

    const imageGalleryLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            selectionLimit: 1, // Allow only one image selection
        };
        ImagePicker.launchImageLibrary(options, res => {
            if (!res.didCancel && !res.error) {
                setImage({
                    uri: res.assets[0].uri,
                    type: res.assets[0].type,
                    name: res.assets[0].fileName,
                });
            }
        });
    };
    const [caption,setCaption] =useState("");
    const postImage =()=>{
        navigation.goBack();
    }
    return (
        <ScrollView style={styles.container}>
            <LoginHeader mainText="Create A Post" />
            <View style={styles.imageView}>
                {image && (
                    <Image source={{ uri: image.uri }} style={styles.image} />
                )}
                <TouchableOpacity onPress={imageGalleryLaunch}>
                    <Text style={styles.buttonText}>Upload Via Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={cameraLaunch}>
                    <Text style={styles.buttonText}>Upload Via Camera</Text>
                </TouchableOpacity>
                <TextInput
                    value={caption}
                    placeholder="Please Enter Caption"
                    style={[styles.inputBox]}
                    placeholderTextColor={'#ACA7A7'}
                    onChangeText={(text) => { setCaption(text); }}
                />
            </View>
            <View style={styles.inputData}>
                <TouchableOpacity style={styles.signUpStyle} onPress={()=>{postImage()}} >
                    <Text style={styles.signUpText}>Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.signUpStyle,{backgroundColor:'#fff'}]} onPress={()=>{navigation.goBack()}} >
                    <Text style={[styles.signUpText,{color:'#64C3BF'}]}>Cancel</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageView: {
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#64C3BF',
        marginBottom: 20,
    },
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
});

export default CreatePost;
