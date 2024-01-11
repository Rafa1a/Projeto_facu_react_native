import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

const ListagemFornecedores: React.FC = (props:any) => {
  const [categorias,setCategorias] = useState<any>([]);
  const [fornecedores,setFornecedores] = useState<any>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<any>(null);

  useEffect(()=>{
    const categoriasUnicas = [...new Set(props.state_fornecedores.map((fornecedor) => fornecedor.categoria))];
    setCategorias(categoriasUnicas)
  },[props.state_fornecedores])

  useEffect(()=>{
    setFornecedores(props.state_fornecedores)
  },[props.state_fornecedores])

  return (
    <SafeAreaView style={styles.container}> 
        {/* adicionar fornecedor */}
        <TouchableOpacity onPress={() => props.navigation.navigate('CadastroFornecedor')} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar Fornecedor</Text>
        </TouchableOpacity>

        {/* categorias */}
        <Text style={{fontSize:25}}>Filtros :</Text>
        <FlatList
          style={{maxHeight: 100}}
          data={categorias}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setCategoriaSelecionada(item)} style={styles.categoryItem}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal={true}
        />
        <TouchableOpacity onPress={() => setCategoriaSelecionada('all')} style={styles.button}>
          <Text style={styles.buttonText}>Todas as categorias</Text>
        </TouchableOpacity>

        {/* fornecedores */}
        <Text style={{fontSize:25}}>Fornecedores :</Text>
        <FlatList
        data={fornecedores.filter(fornecedor => categoriaSelecionada ? categoriaSelecionada === 'all'?true:fornecedor.categoria === categoriaSelecionada : true)}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => (
            <View style={styles.supplierItem}>
            <Image source={item.imagem} style={styles.image} />
            <View style={{flex:1}}>
              <Text>Nome: {item.nome}</Text>
              <Text>Endereço: {item.endereco}</Text>
            </View>
            </View>
        )}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  button: {
    padding: 10,
    backgroundColor: '#1BA2E0',
    borderRadius: 10,
    margin: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  categoryItem: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
  },
  supplierItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

const mapStateProps = ({ state }: { state:any }) => {
  return {
    state_fornecedores: state.state_fornecedores,
  };
};

export default connect(mapStateProps)(ListagemFornecedores);