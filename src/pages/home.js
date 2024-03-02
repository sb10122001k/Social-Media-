/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import React, { useState } from "react";
import Post from "../components/post";
import user from '../assets/user.png'
import { useNavigation } from "@react-navigation/native";
import Follow from "../components/followPeople";
const Home = () => {
    const [postData, setPostData] = useState([
        {
          id: 0,
          userName: 'Rohit',
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
          userName: 'Jane',
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
          userName: 'John',
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
      const [followData, setFollowData] = useState([
        {
            id: 0,
            name: 'Shubham',
            isFollowed: false,
        },
        {
            id: 1,
            name: 'John',
            isFollowed: false,
        },
        {
            id: 2,
            name: 'Alice',
            isFollowed: false,
        },
        {
            id: 3,
            name: 'Michael',
            isFollowed: false,
        },
        {
            id: 4,
            name: 'Emma',
            isFollowed: false,
        },
        {
            id: 5,
            name: 'Ryan',
            isFollowed: false,
        },
        {
            id: 6,
            name: 'Sophia',
            isFollowed: false,
        },
        {
            id: 7,
            name: 'David',
            isFollowed: false,
        },
        {
            id: 8,
            name: 'Olivia',
            isFollowed: false,
        },
        {
            id: 9,
            name: 'Daniel',
            isFollowed: false,
        }
    ]);
    
      const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.headerBlock}>
                    <Text style={{fontSize:20}}>
                        Social Media App
                    </Text>
                    <View style={{display:'flex',flexDirection:'row',gap:5}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('CreatePost')}}>
                        <Text style={{fontSize:20}} >
                                Post
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                        <Text style={{fontSize:20}} >
                                User
                        </Text>
                    </TouchableOpacity>
                    </View>                   
                </View>
            <ScrollView style={{marginBottom:'auto'}}>
                {
                    postData.map((item)=>(
                        <Post data={item} />
                    ))
                }
            </ScrollView>
            <ScrollView horizontal style={styles.followComponent}>
                {followData.map((item)=>(
                    <Follow data={item}/>
                ))}
            </ScrollView>
        </SafeAreaView>
        
    )
}
const styles=StyleSheet.create({
    headerBlock:{
        width:'100%',
        height:40,
        backgroundColor:'#64C3BF',
        justifyContent:'space-between',
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        padding:'2%',
        paddingRight:'5%'
    },
    followComponent:{
        padding:'5%',
        margin:'5%',
        height:300,
        gap:10,
        borderColor:'black',
        borderWidth:1,
        marginBottom:'auto'

    }
})


export default Home;