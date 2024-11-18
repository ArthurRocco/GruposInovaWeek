import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

export default function EspecificacaoDoGrupo({ route }) {
  const { group } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Detalhes do Grupo</Text>
      <View style={styles.card}>
        <Text style={styles.props}>Nome do grupo:</Text>
        <Text style={styles.data}>{group.nome}</Text>

        <Text style={styles.props}>Descrição do projeto:</Text>
        <Text style={styles.data}>{group.descricao}</Text>

        <Text style={styles.props}>Integrantes:</Text>
        {group.integrantes && group.integrantes.length > 0 ? (
          group.integrantes.map((integrante, index) => (
            <Text key={index} style={styles.integrante}>• {integrante}</Text>
          ))
        ) : (
          <Text style={styles.data}>Sem integrantes</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#6544b8',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    alignItems: 'center', // Centraliza os itens horizontalmente
    maxWidth: 400, // Define uma largura máxima para a caixa
    marginHorizontal: 'auto', // Centraliza a caixa horizontalmente
  },
  props: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#d1cdcd',
  },
  data: {
    textAlign: 'center', // Centraliza o texto
    color: '#d1cdcd',
    marginBottom: 10, // Adiciona espaço entre os dados
  },
  integrante: {
    marginLeft: 10,
    color: '#d1cdcd',
  },
});