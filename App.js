import React from 'react';
import NavigationScreen from './src/Component/Navigation';
import { AuthProvider } from './src/Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationScreen />
    </AuthProvider>
  );
};

export default App;
