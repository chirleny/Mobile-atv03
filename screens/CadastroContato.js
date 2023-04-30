import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';

function CadastroContato({route, navigation}) {
    const handleHome = () => {
        navigation.navigate('Home');
    };

    const [getNome,setNome] = useState();
    const [getEmail,setEmail] = useState();


    async function inserirDados(){
     axios.post('https://644c548917e2663b9d049ecb.mockapi.io/cliente/', {
            nome: getNome,
            email: getEmail
        })
        .then(function (response) {
            alert('Contato inserido com sucesso! ');
            navigation.navigate('Home');
        })
        .catch(function (error) {
            console.log(error);
        });  
    }

  return (
  <View style={{ backgroundColor: "#DFDEE0",flex: 1,  alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>
   
        <View style={styles.boxTitulo}>
            <AntDesign style={styles.titulo} name="arrowleft" size={24} color="black" onPress={handleHome}/>
            <Text style={styles.titulo}>Criar contato</Text>            
        </View>

        <TextInput style={styles.input} placeholder="Nome" onChangeText={text => setNome(text)} value={getNome}/>
        <TextInput style={styles.input} placeholder="E-mail" onChangeText={text => setEmail(text)} value={getEmail} />

        <TouchableOpacity style={styles.botaoCadastro} onPress={inserirDados}>
            <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
        
  </View>
  );
}

const styles = StyleSheet.create({
    titulo:{
        fontWeight: 'bold',
        marginTop: 20,
        marginRight: 25,
        fontSize: 20,
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
        backgroundColor: '#0C0B0B',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007bff',
        marginTop: 80,
        marginBottom: 230
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

export default CadastroContato;