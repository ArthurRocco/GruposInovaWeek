import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { supabase } from './supabase';

const backgroundImage = { uri: 'https://www.folhavitoria.com.br/geral/premio-marcas-icones/noticias/uvv-por-seis-vezes-a-melhor-universidade-particular-do-brasil-no-enade/' };

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const tratarLogin = async () => {
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Email ou senha incorretos. Por favor, tente novamente.');
    } else {
      setError('');
      navigation.navigate('Grupos'); 
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.formContainer}>
          <Text style={styles.header}>Olá avaliador!</Text>
          <Text style={styles.subheader}>Essa ferramenta irá te ajudar a avaliar os grupos selecionados para a exibição do InovaWeek</Text>
          <Text style={styles.subheader}>Faça seu login abaixo:</Text>

          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            theme={{ colors: { text: 'white', primary: '#800080', background: '#4c17d1' } }} 
          />
          <TextInput
            label="Senha"
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            theme={{ colors: { text: 'white', primary: '#800080', background: '#4c17d1' } }} 
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <Button mode="contained" onPress={tratarLogin} style={styles.button} labelStyle={styles.buttonText}>
            Login
          </Button>

          <Button
            mode="text"
            onPress={() => navigation.navigate('Cadastro')}
            style={[styles.textButton, { marginBottom: 10 }]}
            labelStyle={{ color: 'black' }}
          >
            Criar conta
          </Button>
          <Button
            mode="text"
            onPress={() => navigation.navigate('EsqueciSenha')}
            style={styles.textButton}
            labelStyle={{ color: 'black' }}
          >
            Esqueci a Senha
          </Button>
        </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%', // Responsivo para ocupar 90% da largura da tela
    maxWidth: 400, // Limite máximo para não ficar muito grande em telas grandes
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(245, 245, 245, 0.8)',
    elevation: 4, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  subheader: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#4c17d1',
  },
  button: {
    marginVertical: 15,
    paddingVertical: 10,
    backgroundColor: 'rgb(255, 133, 173)',
  },
  buttonText: {
    color: 'white',
  },
  textButton: {
    marginVertical: 5,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 14,
  },
});
