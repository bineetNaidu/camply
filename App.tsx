import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigator from './routes/AppNavigator';
import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <>
      <StatusBar />
      <AppNavigator />
    </>
  );
};

export default App;
