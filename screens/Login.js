import { Button, Image, ImageBackground, Keyboard, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React, { useState } from 'react';
import LottieView from 'lottie-react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { BounceInLeft, BounceInRight, FadeIn, FadeOut, SlideOutLeft, SlideOutRight } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

const Login = () => {
  const [showScreen, setShowScreen] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkLogin = (u, p) => {};

  return (
    <ImageBackground source={require('../assets/bg.png')} style={tw`flex-1`}>
      <Pressable onPress={() => Keyboard.dismiss()} style={[tw` flex-1 justify-center `, {}]}>
        {showScreen == 1 && (
          <View style={{flex:1, justifyContent: 'center'}}>
            <LottieView autoPlay loop style={{ marginLeft: 'auto', marginRight: 'auto', width: 200, height: 200 }} source={require('../assets/lottie/key.json')} />
            <View name='login'>
              <Animated.View entering={BounceInLeft.duration(1000)} exiting={SlideOutLeft.duration(300)} style={[tw`p-10 bg-white rounded-r-full mr-16`, { elevation: 15, shadowColor: 'gray' }]}>
                <View style={tw`p-1 bg-white flex-row`}>
                  <MaterialIcons name='email' size={24} color='lightgray' />
                  <TextInput style={{ width: '90%', borderBottomWidth: 1, marginLeft: 10, borderColor: 'lightgray', borderRadius: 5, paddingLeft: 10 }} onChangeText={(email) => setEmail(email)} />
                </View>
                <View style={tw`p-1 bg-white flex-row`}>
                  <MaterialIcons name='vpn-key' size={24} color='lightgray' />
                  <TextInput secureTextEntry={true} style={{ width: '90%', borderBottomWidth: 1, marginLeft: 10, borderColor: 'lightgray', borderRadius: 5, paddingLeft: 10 }} onChangeText={(password) => setPassword(password)} />
                </View>

                {/* button for login */}
                <TouchableOpacity style={[tw`rounded-full absolute bottom-12 right-1 z-50 self-center`, { elevation: 5 }]}>
                  <LinearGradient style={tw`p-4 rounded-full`} colors={['#4FACFE', '#21ECA0']} start={{ x: -1, y: 0 }} end={{ x: 2, y: 0 }}>
                    <MaterialCommunityIcons name='key' style={{ color: '#ffffff', fontSize: 26 }} />
                  </LinearGradient>
                </TouchableOpacity>
              </Animated.View>
            </View>
              <Animated.View entering={BounceInRight.duration(300)} style={tw`bottom-20 absolute right-0 z-50 self-center`}>
                <TouchableOpacity style={[tw`rounded-l-xl`, { elevation: 5 }]} onPress={() => setShowScreen(2)}>
                  <LinearGradient style={tw`p-4 rounded-l-full flex-row p-5`} colors={['#4FACFE', '#21ECA0']} start={{ x: -1, y: 0 }} end={{ x: 2, y: 0 }}>
                    {/* <MaterialCommunityIcons name='key' style={{ color: '#ffffff', fontSize: 26 }} /> */}
                    <AntDesign name='adduser' size={24} color='white' />
                    <Text style={{ marginLeft: 2, color: 'white', fontWeight: 'bold' }}>Create Account</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </Animated.View>
          </View>
        )}
        {showScreen == 2 && (
          <View style={{flex:1, justifyContent: 'center'}}>
          <LottieView autoPlay loop style={{ marginLeft: 'auto', marginRight: 'auto', width: 200, height: 200 }} source={require('../assets/lottie/add-user.json')} />
          <View name='login'>
            <Animated.View entering={BounceInLeft.duration(1000)} exiting={SlideOutLeft.duration(300)} style={[tw`p-10 bg-white rounded-r-full mr-16`, { elevation: 15, shadowColor: 'gray' }]}>
              <View style={tw`p-1 bg-white flex-row`}>
                <MaterialIcons name='email' size={24} color='lightgray' />
                <TextInput style={{ width: '90%', borderBottomWidth: 1, marginLeft: 10, borderColor: 'lightgray', borderRadius: 5, paddingLeft: 10 }} onChangeText={(email) => setEmail(email)} />
              </View>
              <View style={tw`p-1 bg-white flex-row`}>
                <MaterialIcons name='vpn-key' size={24} color='lightgray' />
                <TextInput secureTextEntry={true} style={{ width: '90%', borderBottomWidth: 1, marginLeft: 10, borderColor: 'lightgray', borderRadius: 5, paddingLeft: 10 }} onChangeText={(password) => setPassword(password)} />
              </View>
              <View style={tw`p-1 bg-white flex-row`}>
                <MaterialIcons name='vpn-key' size={24} color='lightgray' />
                <TextInput secureTextEntry={true} style={{ width: '90%', borderBottomWidth: 1, marginLeft: 10, borderColor: 'lightgray', borderRadius: 5, paddingLeft: 10 }} onChangeText={(password) => setPassword(password)} />
              </View>

              {/* button for login */}
              <TouchableOpacity style={[tw`rounded-full absolute bottom-12 right-1 z-50 self-center`, { elevation: 5 }]}>
                <LinearGradient style={tw`p-4 rounded-full`} colors={['#4FACFE', '#21ECA0']} start={{ x: -1, y: 0 }} end={{ x: 2, y: 0 }}>
                  <MaterialCommunityIcons name='key' style={{ color: '#ffffff', fontSize: 26 }} />
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          </View>
            <Animated.View entering={BounceInRight.duration(300)} style={tw`bottom-20 absolute right-0 z-50 self-center`}>
              <TouchableOpacity style={[tw`rounded-l-xl`, { elevation: 5 }]} onPress={() => setShowScreen(1)}>
                <LinearGradient style={tw`p-4 rounded-l-full flex-row p-5`} colors={['#4FACFE', '#21ECA0']} start={{ x: -1, y: 0 }} end={{ x: 2, y: 0 }}>
                  {/* <MaterialCommunityIcons name='key' style={{ color: '#ffffff', fontSize: 26 }} /> */}
                  <AntDesign name='adduser' size={24} color='white' />
                  <Text style={{ marginLeft: 2, color: 'white', fontWeight: 'bold' }}>Back to Login</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
        </View>
        )}
      </Pressable>
    </ImageBackground>
  );
};

export default Login;
