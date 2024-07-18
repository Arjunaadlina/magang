import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../constants/color'

const responsive = Dimensions.get('window').width

const PostDetail = ({route}) => {
    const post = route.params.item
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.primary, padding: responsive * 0.04}}>
            <Text style={styles.title}>Detail post</Text>
            <View style={{marginTop : responsive * 0.04}}>
                <Text style={styles.name}>{post.title}</Text>
                <Text style={styles.body}>{post.body}</Text>
            </View>
        </SafeAreaView>
    )
}

export default PostDetail

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