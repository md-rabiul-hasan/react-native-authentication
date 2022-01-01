import React from 'react';
import { StatusBar } from 'react-native';
import NavigationScreen from './src/Component/Navigation';
import { AuthProvider } from './src/Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#06bcee" />
      <NavigationScreen />
    </AuthProvider>
  );
};

export default App;
