// CadastroFornecedor.tsx (atualizado)

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CadastroFornecedor: React.FC = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [imagem, setImagem] = useState<string | null>(null);

  const handleCadastro = () => {
    // Implementar lógica de cadastro aqui
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} />

      <Text>Endereço:</Text>
      <TextInput value={endereco} onChangeText={setEndereco} />

      <Text>Contato:</Text>
      <TextInput value={contato} onChangeText={setContato} />

      <Button title="Selecionar Imagem" onPress={pickImage} />

      {imagem && <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default CadastroFornecedor;
