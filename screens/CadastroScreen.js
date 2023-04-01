import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons'; 

function CadastroScreen({navigation}) {
    const handleHome = () => {
        navigation.navigate('Login');
      };
  return (
  <View style={{ backgroundColor: "#DFDEE0", flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>
        <View style={styles.boxTitulo}>
            <AntDesign style={styles.titulo} name="arrowleft" size={34} color="black" onPress={handleHome}/>
            <Text style={styles.titulo}>Criar conta</Text>
        </View>
        <TextInput style={styles.input} placeholder="Nome"/>
        <TextInput style={styles.input} placeholder="E-mail"/>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
        <TextInput style={styles.input} placeholder="Repetir Senha" secureTextEntry={true}/>
        <TextInput style={styles.input} placeholder="CPF"/>

        <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
    titulo:{
        fontWeight: 'bold',
        marginRight: 30,
        fontSize: 20,
        paddingTop: 18,
    },
    input: {
        width: '85%',
        marginVertical: 20,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
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
        marginTop: 10,
        marginBottom: 30
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    boxTitulo:{
        width: '100%',
        paddingLeft: 18,
        paddingTop: 18,
        flexDirection:'row'
    },
  });

export default CadastroScreen;