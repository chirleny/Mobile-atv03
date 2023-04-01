import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function CadastroContato({navigation}) {
    const handleHome = () => {
        navigation.navigate('Home');
      };
  return (
  <View style={{ backgroundColor: "#DFDEE0", alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>
   
        <View style={styles.boxTitulo}>
            <AntDesign style={styles.titulo} name="arrowleft" size={24} color="black" onPress={handleHome}/>
            <Text style={styles.titulo}>Criar contato</Text>            
        </View>

        <TextInput style={styles.input} placeholder="Nome"/>
        <TextInput style={styles.input} placeholder="E-mail"/>
        <TextInput style={styles.input} placeholder="Telefone"/>

        <TouchableOpacity style={styles.botaoCadastro} onPress={handleHome}>
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
        flex: 1,
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