import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const AddTeacher = ({ navigation }) => {
  // Déclare les états pour chaque champ
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleContinue = () => {
    // Ici, tu peux ajouter la logique de soumission
    console.log('Nom:', name);
    console.log('Adresse:', address);
    console.log('Email:', email);
    console.log('Téléphone:', phone);
      // Fonction pour gérer le bouton Continuer
 
    // Ajouter ici la logique pour gérer la soumission des données si nécessaire

    // Naviguer vers l'écran Phase2
    navigation.navigate('Phase2');
  

    // Navigation ou autre logique
    // navigation.navigate('AutreEcran'); // Décommente si tu veux naviguer vers un autre écran
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Ajouter un Enseignant</Text>

        {/* Champs de saisie pour chaque donnée */}
        <Text style={styles.label}>Nom</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Entrez le nom"
        />

        <Text style={styles.label}>Adresse</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Entrez l'adresse"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Entrez l'email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Téléphone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Entrez le téléphone"
          keyboardType="phone-pad"
        />

        {/* Bouton "Continuer" personnalisé avec fond vert */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continuer</Text>
        </TouchableOpacity>
      </View>

      {/* App Bar personnalisée en bas avec les 3 boutons */}
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.appBarButton} onPress={() => console.log('Button 1 pressed')}>
          <Text style={styles.appBarText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appBarButton} onPress={() => console.log('Button 2 pressed')}>
          <Text style={styles.appBarText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appBarButton} onPress={() => console.log('Button 3 pressed')}>
          <Text style={styles.appBarText}>3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
  },
  continueButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  appBarButton: {
    padding: 10,
  },
  appBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default AddTeacher;
