/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from "react-native"
import user from '../assets/user.png'
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState } from "react";

const Follow = (data) => {
    const [isFollowed, setIsFollowed] = useState(false);
    
    const handleFollowToggle = () => {
        console.log("Herere")
        setIsFollowed(!isFollowed);
        //Do an api call to send the dactual data here 
    };

    return (
        <View style={styles.follow}>
            <Image source={user} style={styles.image} resizeMode="cover"/>
            <Text style={{color:'black'}}>{data?.data?.name}</Text>
            <TouchableOpacity onPress={()=> {handleFollowToggle()}} style={isFollowed ? styles.followButtonUnfollowed : styles.followButtonFollowed}>
                <Text style={isFollowed ? styles.followButtonTextUnfollowed : styles.followButtonTextFollowed}>{isFollowed ? 'Unfollow' : 'Follow'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    follow: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
        paddingTop: '10%',
        paddingBottom: '10%',
        borderColor:'#BBE8E5',
        borderWidth:1
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    followButtonFollowed: {
        backgroundColor: 'green', 
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    followButtonUnfollowed: {
        backgroundColor: 'blue', 
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    followButtonTextFollowed: {
        color: 'white', 
    },
    followButtonTextUnfollowed: {
        color: 'white', 
    },
});

export default Follow;
