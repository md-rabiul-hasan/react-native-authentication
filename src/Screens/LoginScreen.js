import React, { useContext, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../Context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [mobile_number, setMobileNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Mobile No"
          onChangeText={text => setMobileNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          keyboardType="numeric"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <Button
          title="Login"
          onPress={() => {
            login(mobile_number, password);
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  link: {
    color: 'blue',
  },
});

export default LoginScreen;
