import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/color';
import { useNavigation } from '@react-navigation/native';

const Forgot = () => {
    const navigation = useNavigation()
    const maskedEmail = 'example****@gmail.com'; // Dummy masked email, replace with real email if available

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Verifikasi</Text>
                <Image source={require('../../assets/image/logo.jpeg')} style={styles.image} />
                <Text style={styles.subtitle}>Masukkan OTP</Text>
                <Text style={styles.description}>
                    Masukkan kode OTP yang kami kirim melalui email anda yang terdaftar
                </Text>
                <View style={styles.otpContainer}>
                    {[...Array(5)].map((_, i) => (
                        <TextInput
                            key={i}
                            placeholder=""
                            style={styles.otpInput}
                            maxLength={1}
                            keyboardType="number-pad"
                        />
                    ))}
                </View>
                <View style={styles.emailContainer}>
                    <Text style={styles.emailDescription}>
                        Kami sudah mengirimkan kode OTP pada{' '}
                        <Text style={styles.emailHighlight}>{maskedEmail}</Text>, cek kontak masuk anda
                    </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewPass')}>
                    <Text style={styles.buttonText}>Kirim</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Forgot;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: 16,
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
    },
    image: {
        height: 175,
        width: 175,
        marginTop: 24,
    },
    subtitle: {
        color: COLORS.second1,
        fontSize: 24,
        marginTop: 24,
    },
    description: {
        color: '#ddd',
        textAlign: 'center',
        marginTop: 12,
    },
    otpContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 24,
    },
    otpInput: {
        height: 60,
        width: 50,
        borderWidth: 2,
        borderColor: COLORS.second1,
        borderRadius: 12,
        textAlign: 'center',
        color: COLORS.second1,
    },
    emailContainer: {
        width: '100%',
        marginTop: 12,
        alignItems: 'flex-start',
    },
    emailDescription: {
        width: 280,
        marginTop: 12,
        color: '#ddd',
        textAlign: 'left',
    },
    emailHighlight: {
        color: COLORS.second1,
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.second1,
        marginTop: 16,
        borderRadius: 12,
        justifyContent: 'center',
    },
    buttonText: {
        color: COLORS.primary,
        fontSize: 16,
        textAlign: 'center',
    },
});
