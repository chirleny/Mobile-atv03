import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';

function EditContato({route, navigation}) {
    const [getNome,setNome] = useState();
    const [getTelefone,setTelefone] = useState();
    const [getId,setId] = useState();
    const [getEmail,setEmail] = useState();
    
    useEffect(()=>{
        if(route.params){
            const { nome } =  route.params 
            const { telefone } =  route.params 
            const { id } =  route.params

            setNome(nome)
            setTelefone(telefone)
            setId(id)
        }
    
    },[]) 

    const handleHome = () => {
        navigation.navigate('Home');
      };

      function alterarDados(){
        axios.put('https://644c548917e2663b9d049ecb.mockapi.io/cliente/'+getId, {
            nome: getNome,
            telefone: getTelefone,
            email: getEmail
        })
        .then(function (response) {
            alert('Contato atualizado com sucesso! ');
            navigation.navigate('Home');
        })
        .catch(function (error) {
        console.log(error);
        });    
    }

    function deletarDados(){
        axios.delete('https://644c548917e2663b9d049ecb.mockapi.io/cliente/'+getId) 
        .then(function (response) {
            alert('Contato deletado com sucesso! ');
            navigation.navigate('Home');
        })
        .catch(function (error) {
        console.log(error);
        });    
    }

  return (
  <View style={{ backgroundColor: "#DFDEE0", flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>

        <View style={styles.boxTitulo}>
            <AntDesign style={styles.titulo} name="arrowleft" size={24} color="black" onPress={handleHome}/>
            <Text style={styles.titulo}>Editar contato</Text>        
        </View>

        <TextInput style={styles.input} placeholder="Nome" onChangeText={text => setNome(text)}value={getNome}/>
        <TextInput style={styles.input} placeholder="E-mail" onChangeText={text => setEmail(text)}value={getEmail}/>
        <TextInput style={styles.input} placeholder="Telefone" onChangeText={text => setTelefone(text)}value={getTelefone}/>

        <TouchableOpacity style={styles.botaoCadastro} onPress={alterarDados}>
            <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botaoExcluir} onPress={deletarDados}>
            <Text style={styles.textoBotao}>Excluir</Text>
        </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
    titulo:{
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 20,
        marginRight: 30,
        paddingTop: 18,
    },
    input: {
        width: '85%',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFDFD'
    },
    botaoCadastro: {
        width: '85%',
        backgroundColor: '#68A54C',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007bff',
        marginTop: 30,
    },
    botaoExcluir: {
        width: '85%',
        backgroundColor: '#0C0B0B',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007bff',
        marginBottom: 230,
        marginTop: 30,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    boxTitulo:{
        width: '100%',
        paddingLeft: 18,
        flexDirection:'row'
    },
  });

export default EditContato;