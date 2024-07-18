import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, Alert } from 'react-native'
import { COLORS } from '../../constants/color'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const responsive = Dimensions.get('window').width

const SignUp = () => {
    const navigation = useNavigation()
    const [secure, setSecure] = useState(true)
    const [secureConfirmPass, setSecureConfirmPass] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ borderRadius : 12}}>
                <Text style={[styles.text, {fontSize : 12,}]}>Username</Text>
                <TextInput 
                placeholder='Masukkan username anda'
                placeholderTextColor='#a9a9a9'
                cursorColor={COLORS.second1}
                autoCapitalize='none'
                onChange={(e)=> handleName(e)}
                style = {{
                    borderWidth : 2,
                    height : 50,
                    marginTop : 8, borderRadius : 12, padding : 12,
                    borderColor : COLORS.second1,
                    color : COLORS.second1,
    
                    fontSize : 11
                }}
                />
            </View>
            <View style={{marginTop : 16, borderRadius : 12}}>
                <Text style={[styles.text, {fontSize : 12,}]}>Email</Text>
                <TextInput 
                placeholder='Masukkan email anda'
                placeholderTextColor='#a9a9a9'
                keyboardType='email-address'
                cursorColor={COLORS.second1}
                autoCapitalize='none'
                style = {{
                    borderWidth : 2,
                    height : 50,
                    marginTop : 8, borderRadius : 12, padding : 12,
                    borderColor : COLORS.second1,
                    color : COLORS.second1,
    
                    fontSize : 11
                }}
                />
            </View>
            <View style={{marginTop : 16, borderRadius : 12}}>
                <Text style={[styles.text, {fontSize : 12,}]}>Password</Text>
                <View style={{borderWidth : 2, borderColor : COLORS.second1, height : 50, marginTop : 8, borderRadius : 12, padding : 12, flexDirection : 'row', justifyContent: 'space-between'}}>
                <TextInput 
                placeholder='Masukkan password anda'
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
                <Text style={[styles.text, {fontSize : 12,}]}>Konfirmasi Password</Text>
                <View style={{borderWidth : 2, borderColor : COLORS.second1, height : 50, marginTop : 8, borderRadius : 12, padding : 12, flexDirection : 'row', justifyContent: 'space-between'}}>
                <TextInput 
                placeholder='Masukkan password anda sekali lagi'
                placeholderTextColor='#a9a9a9'
                autoCapitalize='none'
                cursorColor={COLORS.second1}
                secureTextEntry = {secureConfirmPass}
                style = {{
                    flex : 1,
                    color : COLORS.second1,
    
                    fontSize : 11
                }}
                />
                <TouchableOpacity onPress={()=> setSecureConfirmPass(!secureConfirmPass)} style={{width : 30, justifyContent:'center', alignItems:'center'}}>
                    <FontAwesome5 name={secureConfirmPass? 'eye' : 'eye-slash'} color='#fff' size={16}/>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{marginTop : 28, flex:1, justifyContent:'flex-end', paddingBottom : 16}}>
                <TouchableOpacity style={{height : 45, backgroundColor : COLORS.second1, justifyContent : 'center', alignItems : 'center', borderRadius : 12}}
                onPress={()=> navigation.navigate('Login')}>
                <Text style={{ color : COLORS.primary}}>Daftar</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', justifyContent : 'center', alignItems : 'center', marginTop : 16}}>
                <Text style={{ color : '#fff', fontSize: 12, justifyContent : 'center', alignItems : 'center'}}>Sudah punya akun ? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text  style={{ color : COLORS.second1, fontSize: 12}}>Masuk</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    text : {
        color : '#fff'
    },
    container : {
        flex : 1,
        backgroundColor : COLORS.primary,
        padding : 16
    }
})