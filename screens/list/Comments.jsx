import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/color';
import List from '../../components/List';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const responsive = Dimensions.get('window').width;

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {
                setComments(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
        setLoading(false);
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.userContainer} onPress={() => navigation.navigate('CommentDetail', { item })}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
            </Text>
            <Text style={styles.body} numberOfLines={1} ellipsizeMode="tail">
                {item.email}
            </Text>
            <Text style={styles.body} numberOfLines={2} ellipsizeMode="tail">
                {item.body}
            </Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <Text style={{fontSize: responsive * 0.05, fontWeight: 'bold', color: '#fff',padding: responsive * 0.03}}>Comments</Text>
            <List
                data={comments}
                loading={loading}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

export default Comments;

const styles = StyleSheet.create({
    userContainer: {
        padding: responsive * 0.04,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.second1,
    },
    title: {
        fontSize: responsive * 0.045,
        fontWeight: 'bold',
        color: COLORS.second2,
    },
    body: {
        fontSize: responsive * 0.035,
        color: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
