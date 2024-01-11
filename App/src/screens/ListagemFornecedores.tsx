// ListagemFornecedores.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

const ListagemFornecedores: React.FC = (props:any) => {
  const [categorias,setCategorias] = useState<any>([]);

  useEffect(()=>{
    const categoriasUnicas = [...new Set(props.state_fornecedores.map((fornecedor) => fornecedor.categoria))];
    // console.log(categoriasUnicas)
    setCategorias(categoriasUnicas)
  },[props.state_fornecedores])

  return (
    <SafeAreaView> 
        <View style={{flexDirection:'row',width:'100%', backgroundColor:'#ffff'}}>
          <FlatList
          data={categorias}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item }) => (
                <Text>{item}</Text>
          )}
          />
        </View>

        <FlatList
        data={props.state_fornecedores}
        keyExtractor={(item,index) => index.toString()}
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
const mapStateProps = ({ state }: { state:any }) => {
  return {
    state_fornecedores: state.state_fornecedores,
  };
};
export default connect(mapStateProps)(ListagemFornecedores);
