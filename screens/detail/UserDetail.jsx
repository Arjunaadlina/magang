import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../constants/color'

const responsive = Dimensions.get('window').width

const UserDetail = ({route}) => {
    const user = route.params.item
    console.log(user)
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.primary, padding: responsive * 0.04}}>
            <Text style={styles.title}>Detail User</Text>
            <View style={{marginTop : responsive * 0.04}}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={[styles.body, {color: COLORS.second1}]}>email : {user.email}</Text>
                <Text style={styles.body}>username : {user.username}</Text>
                <Text style={styles.body}>phone : {user.phone}</Text>
                <Text style={styles.body}>website : {user.website}</Text>
                <Text style={styles.body}>company : {user.company?.name}</Text>
                <Text style={styles.body}>address : {user.address?.street}</Text>
                <Text style={styles.body}>city : {user.address?.city}</Text>
                <Text style={styles.body}>zipcode : {user.address?.zipcode}</Text>

            </View>
        </SafeAreaView>
    )
}

export default UserDetail

const styles = StyleSheet.create({
    title : {
        color: '#fff',
        fontSize: responsive * 0.055,
        fontWeight: 'bold'
    },
    name: {
        fontSize: responsive * 0.05,
        fontWeight: 'bold',
        color: COLORS.second2,
        marginBottom: responsive * 0.02
    },
    body: {
        fontSize: responsive * 0.04,
        color: '#fff',
        
    },
})