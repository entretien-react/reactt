import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Gestion des actions des boutons
  const handleButtonPress = (buttonNumber) => {
    if (buttonNumber === 1) {
      navigation.navigate('AddTeacher'); // Naviguer vers AddTeacher lorsque le bouton 1 est pressé
    } else {
      console.log(`Bouton ${buttonNumber} pressé`);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Contenu principal de l'écran */}
      <View style={styles.container}>
        <Text style={styles.text}>Page d'Accueil</Text>
      </View>

      {/* App Bar en bas */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(3)}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
