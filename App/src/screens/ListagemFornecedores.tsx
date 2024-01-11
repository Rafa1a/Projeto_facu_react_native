// ListagemFornecedores.tsx

import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ListagemFornecedores: React.FC = () => {
  // Dados de exemplo para a lista
  const fornecedores = [
    { id: '1', nome: 'Fornecedor 1', endereco: 'Endereço 1', imagem: require('../assets/Anonymous.png')},
    { id: '2', nome: 'Fornecedor 2', endereco: 'Endereço 2', imagem: require('../assets/Anonymous.png') },
    // Adicione mais fornecedores conforme necessário
  ];

  return (
    <SafeAreaView> 
        <FlatList
        data={fornecedores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View>
            <Image source={item.imagem} style={{ width: 50, height: 50 }} />
            <Text>{item.nome}</Text>
            <Text>{item.endereco}</Text>
            </View>
        )}
        />
    </SafeAreaView>
  );
};

export default ListagemFornecedores;
