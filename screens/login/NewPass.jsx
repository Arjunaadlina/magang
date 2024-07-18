import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';


const responsive = Dimensions.get('window').width;
const NewPass = ({route}) => {
    const [secure, setSecure]= useState(true)
    const [secureConfirm, setSecureConfirm] = useState(true)
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Ubah kata sandi</Text>
            <View style={{marginTop : 16, borderRadius : 12}}>
                <Text style={[styles.text, {fontSize : responsive * 0.04,}]}>Password</Text>
                <View style={{borderWidth : 2, borderColor : COLORS.second1, height : 50, marginTop : 8, borderRadius : 12, padding : 12, flexDirection : 'row', justifyContent: 'space-between'}}>
                    <TextInput 
                    placeholder='Masukkan password baru'
                    placeholderTextColor='#a9a9a9'
                    autoCapitalize='none'
                    cursorColor={COLORS.second1}
                    secureTextEntry = {secure}
                    style = {{
                        flex : 1,
                        color : COLORS.second1,
                        fontSize : 11
                    }}
                    />
                    <TouchableOpacity onPress={()=> setSecure(!secure)} style={{width : 30, justifyContent:'center', alignItems:'center'}}>
                        <FontAwesome5 name={secure? 'eye' : 'eye-slash'} color='#fff' size={16}/>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={{marginTop : 16, borderRadius : 12}}>
                    <Text style={[styles.text, {fontSize : responsive * 0.04,}]}>Konfirmasi Password</Text>
                    <View style={{borderWidth : 2, borderColor : COLORS.second1, height : 50, marginTop : 8, borderRadius : 12, padding : 12, flexDirection : 'row', justifyContent: 'space-between'}}>
                        <TextInput 
                        placeholder='Masukkan password baru anda sekali lagi'
                        placeholderTextColor='#a9a9a9'
                        autoCapitalize='none'
                        cursorColor={COLORS.second1}
                        secureTextEntry = {secureConfirm}
                        style = {{
                            flex : 1,
                            color : COLORS.second1,
                            fontSize : 11
                        }}
                        />
                        <TouchableOpacity onPress={()=> setSecureConfirm(!secureConfirm)} style={{width : 30, justifyContent:'center', alignItems:'center'}}>
                            <FontAwesome5 name={secureConfirm? 'eye' : 'eye-slash'} color='#fff' size={16}/>
                        </TouchableOpacity>
                </View>
            </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 16,
    justifyContent : 'center'
  },
  title: {
    fontSize: 20,
    
    color: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.second1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 24
  },
  buttonText: {
    color: COLORS.primary,
  },
  text : {
    color: '#fff'
  }
});

export default NewPass;
