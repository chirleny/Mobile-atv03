import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';
import {signOut } from "firebase/auth";
import { auth } from "./Firebase.js";

function HomeScreen({route, navigation}) {

const [getData, setData] = useState([]);
const isFocused = useIsFocused();

const logOutUser = () => {
  signOut(auth).then(() => {
    alert('Usuário deslogado com sucesso! ');
    navigation.navigate('Login');
    }).catch((error) => {
      console.log(error); 
    });
};

  useEffect(()=>{    
    async function consultarDados(){
      axios.get('https://644c548917e2663b9d049ecb.mockapi.io/cliente/')          
      .then(function (response) {
        setData(response.data);
      }).catch(function (error) {
        console.log(error);      
      });      
    }
    consultarDados();
  }, [isFocused])  

  const handleCadastroContato = () => {
    navigation.navigate('Contato');
  };

  return (    
    <View style={styles.container}>
      <View style={styles.boxTitulo}>
          <Text style={styles.tituloRota}>Lista de Contatos</Text>
          <TouchableOpacity onPress={handleCadastroContato}>
            <AntDesign style={styles.titulo} name="plus" size={24} color="black" />
          </TouchableOpacity>  

          <TouchableOpacity onPress={logOutUser}>
          <Text style={styles.titulo}>Sair</Text>
          </TouchableOpacity>

      </View>
          {
            getData.map((linha, i) => (
              <View style={styles.box} key={i}>
                <View style={styles.inner} >
                <TouchableOpacity onPress={()=>navigation.navigate('Editar',{id:linha.id})}>
                    <Ionicons style={styles.icon} name="person-outline" size={35} />
                    <Text style={styles.textoDivs}>{linha.nome}</Text>
                    <Text style={styles.descricaoEmAndamento}>{linha.telefone}</Text>
                </TouchableOpacity>                       
                </View>
              </View>                    
              
            ))
          }                        
    </View>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18
    },
    header:{
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DFDEE0',
    },
    containerList:{
        width: '100%',
        height: '80%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#DFDEE0'
    },
    box:{
        width: '100%',
        height: '23%',
        padding: 5,
        flexDirection:'row'
    },
    boxSecond:{
        width: '100%',
        height: '15%',
        padding: 5,
    },
    inner:{
        flex: 1,
        backgroundColor: '#68A54C',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    descricaoEmAndamento:{
        fontSize: 17,
        color: '#F0E3E3',
        fontWeight: 'bold',
    },
    textoDivs:{
        fontWeight: 'bold',
        fontSize: 17,
    },
    botaoCadastro: {
        width: '85%',
        height: 35,
        backgroundColor: '#0C0B0B',
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 10,
        borderColor: '#007bff',
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    boxTitulo:{
        width: '100%',
        flexDirection:'row'
    },
    tituloRota:{
        fontWeight: 'bold',
        fontSize: 18,
        padding: 18,
    },
    titulo:{
      fontWeight: 'bold',
      marginRight: 30,
      fontSize: 20,
      paddingTop: 18,
  },
});

export default HomeScreen;