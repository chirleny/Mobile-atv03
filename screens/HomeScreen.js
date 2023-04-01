import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function RotaScreen({navigation}) {
  const handleCadastroContato = () => {
    navigation.navigate('Contato');
  };
  const handleEditContato = () => {
    navigation.navigate('Editar');
  };
  return (    
    <View style={styles.container}>
        <View style={styles.containerList}>
            <View style={styles.boxTitulo}>
                <Text style={styles.tituloRota}>Lista de Contatos</Text>
                <TouchableOpacity onPress={handleCadastroContato}>
                  <AntDesign style={styles.titulo} name="plus" size={24} color="black" />
                </TouchableOpacity>                
            </View>
            <View style={styles.box} >
                <View style={styles.inner} >
                <TouchableOpacity onPress={handleEditContato}>
                    <Ionicons style={styles.icon} name="person-outline" size={35} />
                    <Text style={styles.textoDivs}>Marcos Carlos</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 98855-6589</Text>
                </TouchableOpacity>                       
            </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                  <TouchableOpacity onPress={handleEditContato}>
                    <Ionicons style={styles.icon} name="person-outline" size={35} />
                    <Text style={styles.textoDivs}>Livia Sátiro</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 98855-6589</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                  <TouchableOpacity onPress={handleEditContato}>
                    <Ionicons style={styles.icon} name="person-outline" size={35} />
                    <Text style={styles.textoDivs}>Eduarda Silva</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 98855-6589</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                  <TouchableOpacity onPress={handleEditContato}>
                    <Ionicons style={styles.icon} name="person-outline" size={35} />
                    <Text style={styles.textoDivs}>Carlos Silva</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 98855-6589</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                  <TouchableOpacity onPress={handleEditContato}>
                    <Ionicons style={styles.icon} name="person-outline" size={35} />
                    <Text style={styles.textoDivs}>Maria Silva</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 98855-6589</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>

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

export default RotaScreen;