import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../constants/color'

const responsive = Dimensions.get('window').width

const CommentDetail = ({route}) => {
    const comment = route.params.item
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.primary, padding: responsive * 0.04}}>
            <Text style={styles.title}>Detail comment</Text>
            <View style={{marginTop : responsive * 0.04}}>
                <Text style={styles.name}>{comment.name}</Text>
                <Text style={[styles.body, {color: COLORS.second1}]}>email : {comment.email}</Text>
                <Text style={styles.body}>{comment.body}</Text>
            </View>
        </SafeAreaView>
    )
}

export default CommentDetail

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