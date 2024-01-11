// ListagemFornecedores.tsx

import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

const ListagemFornecedores: React.FC = () => {
  // Dados de exemplo para a lista
  const fornecedores = [
    { id: '1', nome: 'Fornecedor 1', endereco: 'Endereço 1', imagem: require('./path/to/image1.jpg') },
    { id: '2', nome: 'Fornecedor 2', endereco: 'Endereço 2', imagem: require('./path/to/image2.jpg') },
    // Adicione mais fornecedores conforme necessário
  ];

  return (
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
  );
};

export default ListagemFornecedores;
