import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../constants/color'
import { useNavigation } from '@react-navigation/native'

const responsive = Dimensions.get('window').width

const Dashboard = () => {
    const data = [
        'posts',
        'comments',
        'users'
    ]

    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor : COLORS.primary, padding: responsive * 0.04 }}>
            <View style={styles.containerImage}>
                <Text style={{color:'#fff', fontSize : responsive * 0.05, fontWeight: 'bold'}}>Dashboard</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                     <Image source={require('../../assets/image/profile.jpeg')} style={{ width: responsive * 0.13, height: responsive * 0.13, borderRadius: responsive }}/>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={data}
                renderItem={({item}) => (
                    <TouchableOpacity style={{margin : responsive * 0.01, padding: responsive * 0.02, width: responsive * 0.44, backgroundColor: COLORS.second1, borderRadius: responsive * 0.04, alignItems: 'center', justifyContent: 'center', height: responsive * 0.3}}
                    onPress={() => navigation.navigate(item)}>
                        <Text style={{color: COLORS.primary, fontSize: responsive * 0.045, fontWeight: 'bold'}}>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    containerImage : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: responsive * 0.06
    }
})