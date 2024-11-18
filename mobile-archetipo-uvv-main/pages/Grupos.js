import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Button } from 'react-native';
import { info } from '../data/dados';

export default function MainPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Grupos Disponíveis</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {info.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.props}>Nome do grupo:</Text>
            <Text>{item.nome}</Text>
            <Button
              title="Ver Mais"
              onPress={() => navigation.navigate('EspecificacaoDoGrupo', { group: item })}
              color="#1e90ff"
              backgroundColor="rgb(255, 133, 173)"
            />
          </View>
        ))}
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
    padding: 25, // Aumenta o padding interno da caixa
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 10, // Adiciona margem horizontal para criar espaço nas laterais
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    maxWidth: 450, // Aumenta a largura máxima da caixa
    alignSelf: 'center', // Centraliza a caixa horizontalmente
  },
  props: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
});