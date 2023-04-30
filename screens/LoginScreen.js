import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase.js";

function LoginScreen({navigation}) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Usuário logado com sucesso! ');
      console.log('Usuário logado com sucesso!', userCredential.user.uid);
      navigation.navigate('Home');
      const user = userCredential.user;
    })
    .catch((error) => {
      alert('Usuário não existe no sistema!');
    const errorCode = error.code;
    const errorMessage = error.message;
    });
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.titulo}>Bem-vindo ao PVendas</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}/>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}/>

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoCadastro} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar-se</Text>
      </TouchableOpacity>
      
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  botao: {
    backgroundColor: '#68A54C',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
  },
  botaoCadastro: {
    backgroundColor: '#0C0B0B',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007bff',
    marginTop: 10,
    width: '80%',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default LoginScreen;
