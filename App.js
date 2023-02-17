import { Text, View } from 'react-native';
import React, { useState } from 'react';
import Login from './screens/Login';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [userStatus, setUserStatus] = useState('Not Logged');
  return (
    <View style={{ flex: 1 }}>
      {userStatus !== 'Logged' ? (
        <Login />
      ) : (
        <View style={{ flex: 1 }}>
          <Text>Logged in main screen</Text>
        </View>
      )}
      <StatusBar style='auto' />
    </View>
  );
};

export default App;
