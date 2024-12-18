import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';

const Home = ({ route , navigation}) => {
const [counter, setCounter] = useState(0);
  
    const { email } = route.params;
    const handleSignin = () => {
      navigation.navigate('Test', { counter: counter });
      };
      const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
      };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{email}</Text>
      <Text style={styles.welcomeText}>Bienvenue!</Text>
      
             
                  <Text style={styles.counterText}>Compteur: {counter}</Text>
                  <TouchableOpacity style={styles.button} onPress={incrementCounter}>
                    <Text style={styles.buttonText}>Incrémenter</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={handleSignin}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

    </View>
  
  );
};
//abir@gmail.com

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
