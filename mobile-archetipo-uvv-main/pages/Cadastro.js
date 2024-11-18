import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Button, TextInput } from 'react-native';

export default function Cadastro() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Cadastro</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" />
          
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} placeholder="Digite seu email" />
          
          <Button title="Cadastrar" onPress={() => {}} color="#1e90ff" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 10, // Adiciona margem horizontal para criar espaço nas laterais
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    maxWidth: 400, // Define uma largura máxima para a caixa
    alignSelf: 'center', // Centraliza a caixa horizontalmente
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});