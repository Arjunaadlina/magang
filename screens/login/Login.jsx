import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../../constants/color';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const responsive = Dimensions.get('window').width;

const Login = () => {
    const [secure, setSecure] = useState(true);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require('../../assets/image/logo.jpeg')} 
                            style={{ width: responsive * 0.5, height: responsive * 0.5 }} 
                        />
                    </View>
                    <Text style={styles.title}>Masuk</Text>
                    <Text style={styles.subTitle}>Masuk untuk melanjutkan</Text>
                    <View style={{ marginTop: responsive * 0.08 }}>
                        <Text style={styles.text}>Email</Text>
                        <View style={styles.containerInput}>
                            <FontAwesome5 name="user-alt" size={responsive * 0.06} color={COLORS.second1} />
                            <TextInput 
                                placeholder='Masukkan email anda'
                                style={styles.input}
                                placeholderTextColor='#a0a0a0'
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='email-address'
                            />
                        </View>
                        <View style={{ marginTop: responsive * 0.04 }}>
                            <Text style={styles.text}>Password</Text>
                            <View style={styles.containerInput}>
                                <FontAwesome5 name="lock" size={responsive * 0.06} color={COLORS.second1} />
                                <TextInput 
                                    placeholder='Masukkan password anda'
                                    style={styles.input}
                                    placeholderTextColor='#a0a0a0'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    secureTextEntry={secure}
                                />
                                <TouchableOpacity onPress={() => setSecure(!secure)}>
                                    <FontAwesome5 
                                        name={secure ? 'eye-slash' : 'eye'} 
                                        size={responsive * 0.06} 
                                        color={COLORS.second1} 
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('Forgot')}>
                            <Text style={styles.forgotPasswordText}>Lupa Password ?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Dashboard')}>
                            <Text style={styles.loginButtonText}>Masuk</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.registerButtonText}>Belum punya akun ? Daftar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: responsive * 0.04,
        backgroundColor: COLORS.primary
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsive * 0.08
    },
    title: {
        color: '#fff',
        fontSize: responsive * 0.065,
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#fff',
        fontSize: responsive * 0.04
    },
    text: {
        color: '#fff',
        fontSize: responsive * 0.03
    },
    containerInput: {
        flexDirection: 'row',
        borderWidth: 2,
        marginTop: responsive * 0.02,
        borderColor: COLORS.second1,
        borderRadius: responsive * 0.04,
        padding: responsive * 0.03,
        gap: responsive * 0.03,
        alignItems: 'center'
    },
    input: {
        color: '#fff',
        flex: 1
    },
    forgotPassword: {
        marginTop: responsive * 0.04,
        alignItems: 'flex-end'
    },
    forgotPasswordText: {
        color: COLORS.second1,
        fontSize: responsive * 0.03
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: responsive * 0.05
    },
    loginButton: {
        marginTop: responsive * 0.04,
        backgroundColor: COLORS.second1,
        height: responsive * 0.123,
        borderRadius: responsive * 0.04,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonText: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: responsive * 0.04
    },
    registerButton: {
        marginTop: responsive * 0.04,
        alignItems: 'center'
    },
    registerButtonText: {
        color: COLORS.second1,
        fontSize: responsive * 0.03
    }
});
