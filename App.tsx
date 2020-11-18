import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigator from './routes/AppNavigator';

const App: React.FC = () => {
  return (
    <>
      <StatusBar />
      <AppNavigator />
    </>
  );
};

export default App;
