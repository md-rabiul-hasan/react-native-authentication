import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

const SplashScreen = () => {
  const {isLoading, userInfo, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: '#06bcee',
    justifyContent: 'center',
  },
});

export default SplashScreen;
