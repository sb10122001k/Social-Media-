/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import user from '../assets/user.png'
import Post from "../components/post";

const Profile = () => {
        const [personalPostData, setPersonalPostData] = useState([
            {
              id: 0,
              userName: 'Rohan Seth',
              mediaUrl: 'https://xacco-images.s3.ap-south-1.amazonaws.com/eiffel-tower-in-paris-151-medium.jpg/1706684429860-eiffel-tower-in-paris-151-medium.jpg',
              liked: false,
              caption:'Some Caption',
              commentList: [
                {
                  comment: 'Hi',
                  postBy: 'Asang'
                },
                {
                  comment: 'Looks good',
                  postBy: 'Rohit'
                }
              ]
            },
            {
              id: 1,
              userName: 'Rohan Seth',
              mediaUrl: 'https://xacco-images.s3.ap-south-1.amazonaws.com/eiffel-tower-in-paris-151-medium.jpg/1706684429860-eiffel-tower-in-paris-151-medium.jpg',
              liked: true,
              caption:'Some Caption',
              commentList: [
                {
                  comment: 'Nice view!',
                  postBy: 'Jane'
                }
              ]
            },
            {
              id: 2,
              userName: 'Rohan Seth',
              mediaUrl: 'https://xacco-images.s3.ap-south-1.amazonaws.com/eiffel-tower-in-paris-151-medium.jpg/1706684429860-eiffel-tower-in-paris-151-medium.jpg',
              liked: true,
              caption:'Some Caption',
              commentList: [
                {
                  comment: 'Amazing!',
                  postBy: 'John'
                },
                {
                  comment: 'Awesome!',
                  postBy: 'Alice'
                }
              ]
            }
          ]);
    
    return (
        <SafeAreaView>
            <View style={style.headerBlock} >
                <Image
                    alt="Profile Image"                    
                    style={style.profileImage}
                    source={{uri:'https://pixabay.com/get/g27db1d0a591c5b9d3496eef3aa9ac9f4c168f366d7012677663ec8de64c753fe72933880a19f216ed040473860c8fb8a_1280.jpg'}}
                />

                <Text style={style.profileName}>Rohan Seth</Text>

            </View>
            <ScrollView style={{marginBottom:'auto'}}>
                {personalPostData.map((item)=>(
                    <Post data={item}/>
                ))} 
            </ScrollView>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    headerBlock: {
        width: '100%',
        padding: '2%',
        height: '20%',
        paddingTop: '15%',
        backgroundColor: '#64C3BF',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center'
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor:'black'
    },
    profileName: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
});
export default Profile;
