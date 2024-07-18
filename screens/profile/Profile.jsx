import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../constants/color'

const responsive = Dimensions.get('window').width
const Profile = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.primary, padding: responsive * 0.04}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/image/profile.jpeg')} style={{ width: responsive * 0.55, height: responsive * 0.55, borderRadius: responsive }}/>
            </View>
            <View style={{marginTop: responsive * 0.06}}>
                <Text style={{color: '#fff', fontSize: responsive * 0.04, }}>Nama    :  Arjuna adlina martha</Text>
                <Text style={{color: '#fff', fontSize: responsive * 0.04, }}>Nomor   :  085794214136</Text>
                <Text style={{color: '#fff', fontSize: responsive * 0.04, }}>Email    :  arjunaadlinamartha@.com</Text>
                <Text style={{color: '#fff', fontSize: responsive * 0.04, }}>Pengalaman : </Text>
                <Text style={{color: '#fff', fontSize: responsive * 0.04, }}>- Gemastik 2022</Text>
                <Text style={{color: '#fff', fontSize: responsive * 0.04, }}>- Develop aplikasi akuntansi</Text>
                <Text style={{color: '#fff', fontSize: responsive * 0.04, }}>- Develop aplikasi AR</Text>
                <Text style={{color: '#fff', fontSize: responsive * 0.04, }}>- Develop aplikasi pengukur sifat material</Text>
                <Text style={{color: '#fff', fontSize: responsive * 0.04, }}>- Develop aplikasi sport center</Text>
                <Text style={{color: '#fff', fontSize: responsive * 0.04, }}>- Membantu penelitian dosen</Text>
            </View>
        </SafeAreaView>
    )
}

export default Profile