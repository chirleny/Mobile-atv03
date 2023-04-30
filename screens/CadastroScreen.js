import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase.js";

function CadastroScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleHome = () => {
        navigation.navigate('Login');
    };

    const handleCadastro = async () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Usuário cadastrado com sucesso! ');
            navigation.navigate('Home');
        })
        .catch((error) => {
            console.log('Erro ao cadastrar usuário!' + error);
            alert('Erro ao cadastrar usuário! ');
        });
    };

  return (
  <View style={{ backgroundColor: "#DFDEE0", flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>
        <View style={styles.boxTitulo}>
            <AntDesign style={styles.titulo} name="arrowleft" size={34} color="black" onPress={handleHome}/>
            <Text style={styles.titulo}>Criar conta</Text>
        </View>
        <TextInput style={styles.input} placeholder="E-mail" onChangeText={(text) => setEmail(text)}/>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>

        <TouchableOpacity style={styles.botaoCadastro} onPress={handleCadastro}>
            <Text style={styles.textoBotao}>Salvar</Text>
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