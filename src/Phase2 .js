import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const Phase2 = ({ navigation }) => {
  // Déclare les états pour chaque champ
  const [subject, setSubject] = useState('');
  const [target, setTarget] = useState('');
  const [qualification, setQualification] = useState('');

  // Fonction pour gérer le bouton Submit
  const handleSubmit = () => {
    console.log('Subject:', subject);
    console.log('Target:', target);
    console.log('Qualification/Degree:', qualification);

    // Ajouter ici la logique pour soumettre les données ou aller à un autre écran si nécessaire
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Phase 2</Text>

        {/* Champs de saisie pour chaque donnée */}
        <Text style={styles.label}>Subject</Text>
        <TextInput
          style={styles.input}
          value={subject}
          onChangeText={setSubject}
          placeholder="Enter subject"
        />

        <Text style={styles.label}>Target</Text>
        <TextInput
          style={styles.input}
          value={target}
          onChangeText={setTarget}
          placeholder="Enter target"
        />

        <Text style={styles.label}>Qualification/Degree</Text>
        <TextInput
          style={styles.input}
          value={qualification}
          onChangeText={setQualification}
          placeholder="Enter qualification/degree"
        />

        {/* Boutons Submit et Back */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 10,
  },
  backButton: {
    backgroundColor: 'gray',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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

export default Phase2;
