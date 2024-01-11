// CadastroFornecedor.tsx (atualizado)

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';
import { setDefinir_fornecedor } from '../store/action/state_fornecedores';

const CadastroFornecedor: React.FC = (props:any) => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categoria,setCategoria] = useState('');
  const [imagem, setImagem] = useState<string | null>(null);

  const handleCadastro = () => {

    props.onSetfornecedor([...props.state_fornecedores,{
      nome:nome,
      endereco:endereco,
      contato:contato,
      categoria:categoria,
      imagem:{uri:imagem}
    }])
    props.navigation.goBack();
    console.log(imagem)

  };
  
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
      setImagem(result.assets[0].uri);
    }
  };
  ///////////////////////////////////////////////////
  const [categorias,setCategorias] = useState<any>([]);

  useEffect(()=>{
    const categoriasUnicas = [...new Set(props.state_fornecedores.map((fornecedor) => fornecedor.categoria))];
    setCategorias(categoriasUnicas)
  },[props.state_fornecedores])
  ///////////////////////////////////////////////////
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />

      <Text style={styles.label}>Contato:</Text>
      <TextInput style={styles.input} value={contato} onChangeText={setContato} />
      {/* lista de categorias q existem: */}
      <Text style={styles.label}>Escolha uma categoria existente:</Text>
      <FlatList
          style={{maxHeight: 50}}
          data={categorias}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setCategoria(item)} style={styles.categoryItem}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal={true}
        />
      <Text style={styles.label}>Ou Crie a sua:</Text>
      {/* categorias */}
      <Text style={styles.label}>Categoria:</Text>
      <TextInput style={styles.input} value={categoria} onChangeText={setCategoria} />

      <Button title="Selecionar Imagem" onPress={pickImage} />
      {imagem && <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />}
      <Button title="Cadastrar" onPress={handleCadastro} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  categoryItem: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
  },
});

const mapStateProps = ({ state }: { state:any }) => {
  return {
    state_fornecedores: state.state_fornecedores,
  };
};
const mapFunction = (dispatch: any) => {
  return {
    onSetfornecedor: (fornecedor: any) => dispatch(setDefinir_fornecedor(fornecedor)),
  };
};
export default connect(mapStateProps,mapFunction)(CadastroFornecedor);