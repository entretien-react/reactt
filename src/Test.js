import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';

const Test = ({route}) => {

  // Si l'image est locale, indique le chemin relatif vers l'image dans ton dossier assets
  const imageSource = require('././assets/images.jpg'); // Remplace par le chemin réel de ton image
  const { counter } = route.params;
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [sum, setSum] = useState(null);
  const calculateSum = () => {
    const numA = parseFloat(a);  // Convertir a en nombre
    const numB = parseFloat(b);  // Convertir b en nombre
    if (!isNaN(numA) && !isNaN(numB)) {
      setSum(numA + numB);  // Mettre à jour la somme
    } else {
      alert('Veuillez entrer des nombres valides.');
    }
  };
  
  return (
    <View style={styles.container}>
    
      <Image source={imageSource} style={styles.image} />

   <Text style={styles.title}>{counter} !</Text>

   <TextInput
        style={styles.input}
        placeholder="Entrez la valeur de a"
        value={a}
        onChangeText={setA}
        keyboardType="numeric" // Permet uniquement la saisie numérique
      />

      {/* Zone de saisie pour b */}
      <TextInput
        style={styles.input}
        placeholder="Entrez la valeur de b"
        value={b}
        onChangeText={setB}
        keyboardType="numeric" // Permet uniquement la saisie numérique
      />
       {/* Bouton pour calculer la somme */}
       <TouchableOpacity style={styles.button} onPress={calculateSum}>
        <Text style={styles.buttonText}>Calculer la somme</Text>
      </TouchableOpacity>

      {/* Affichage de la somme */}
      {sum !== null && (
        <Text style={styles.resultText}>Résultat : {sum}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: 200,   // Largeur de l'image
    height: 200,  // Hauteur de l'image
    marginBottom: 20, // Marge en bas de l'image
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
});

export default Test;
