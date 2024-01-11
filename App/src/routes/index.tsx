// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroFornecedor from '../screens/CadastroFornecedor';
import ListagemFornecedores from '../screens/ListagemFornecedores';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListagemFornecedores">
        <Stack.Screen name="ListagemFornecedores" component={ListagemFornecedores} />
        <Stack.Screen name="CadastroFornecedor" component={CadastroFornecedor} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
