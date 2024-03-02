/* eslint-disable prettier/prettier */
import { Image, StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import user from '../assets/user.png';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";
const Post = (data) => {
    const imageUrl = 'https://xacco-images.s3.ap-south-1.amazonaws.com/eiffel-tower-in-paris-151-medium.jpg/production_id+3756003+(2160p).mp4';
    // const imageUrl = '';
    const [postData, setPostData] = useState(data?.data)
    const setLike = () => {
        setPostData(prevData => ({
            ...prevData,
            liked: !prevData.liked,
        }));
    };
    console.log(data?.data)
    return (
        <View style={{ margin: '5%', borderColor: 'black', borderWidth: 1, borderRadius: 4 }}>
            <View style={style.postHeader}>
                <Image source={user} style={style.userImage} resizeMode="contain" />
                <Text style={style.userName}>{postData.userName}</Text>
            </View>
            <View>
                <Image
                    source={{ uri: postData?.mediaUrl }}
                    style={style.videoStyle}
                    controls={true}
                    resizeMode="cover"
                />

            </View>
            <View style={style.postBottom}>
                <View style={style.bottomContainer}>
                    <TouchableOpacity style={style.bottomLike} onPress={setLike}>
                        {postData?.liked ?
                            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <Path d="M23 10C23 9.46957 22.7893 8.96086 22.4142 8.58579C22.0391 8.21071 21.5304 8 21 8H14.68L15.64 3.43C15.66 3.33 15.67 3.22 15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9V19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10ZM1 21H5V9H1V21Z" fill="#64C3BF" />
                            </Svg>
                            :
                            <Svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                <Path d="M13.1907 6.89721L13.0641 7.5H13.68H20C20.3978 7.5 20.7794 7.65804 21.0607 7.93934C21.342 8.22064 21.5 8.60218 21.5 9V11C21.5 11.1905 21.4644 11.3667 21.3971 11.5409L18.3804 18.5831L18.3804 18.5831L18.3785 18.5877C18.1544 19.1254 17.6238 19.5 17 19.5H8C7.60218 19.5 7.22064 19.342 6.93934 19.0607C6.65804 18.7794 6.5 18.3978 6.5 18V8C6.5 7.58728 6.66397 7.21314 6.94355 6.93355L13.1717 0.705436L13.8764 1.40355C13.8767 1.40381 13.877 1.40406 13.8772 1.40431C14.0571 1.58462 14.17 1.8387 14.17 2.11C14.17 2.19028 14.1627 2.26633 14.1501 2.32984L13.1907 6.89721ZM3.5 8.5V19.5H0.5V8.5H3.5Z" stroke="black" />
                            </Svg>
                        }
                    </TouchableOpacity>
                </View>
                <View style={style.bottomContainer}>
                    <TouchableOpacity style={style.bottomLike}>
                        <Text style={style.likeText}>Comments</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <Text style={{ color: 'black' }}>
                    {postData.userName}
                </Text>
                <Text style={{ color: 'black' }}>

                    {postData?.caption}

                </Text>

            </View>


        </View>
    );
};
const style = StyleSheet.create({
    postHeader: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
        paddingLeft: 5
    },
    userImage: {
        width: 40,
        height: 40,
        marginRight: 5
    },
    userName: {
        color: '#64C3BF'
    },
    videoStyle: {
        width: '100%',
        height: 200,
    },
    postBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 40,
        alignItems: 'center',
        marginTop: '1%'
    },

    bottomContainer: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        // backgroundColor: '#BBE8E5',

    },

    bottomLike: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    likeText: {
        fontSize: 16,
        color: 'black',
    },

})
export default Post;
