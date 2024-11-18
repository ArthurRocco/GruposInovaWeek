import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/Login';
import CadastroPage from './pages/Cadastro';
import EsqueciSenhaPage from './pages/EsqueciSenha';
import GruposPage from './pages/Grupos';
import EspecificacaoDoGrupoPage from './pages/EspecificacaoDoGrupo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={CadastroPage} 
          options={{ title: 'Cadastro' }} 
        />
        <Stack.Screen 
          name="EsqueciSenha" 
          component={EsqueciSenhaPage} 
          options={{ title: 'Esqueci a Senha' }} 
        />
        <Stack.Screen 
          name="Grupos" 
          component={GruposPage} 
          options={{ title: 'Grupos' }} 
        />
        <Stack.Screen 
          name="EspecificacaoDoGrupo" 
          component={EspecificacaoDoGrupoPage} 
          options={{ title: 'Especificação do Grupo' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}