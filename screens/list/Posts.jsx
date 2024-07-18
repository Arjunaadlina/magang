import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/color';
import List from '../../components/List';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const responsive = Dimensions.get('window').width;

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
        setLoading(false);
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.userContainer} onPress={() => navigation.navigate('PostDetail', { item })}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
            </Text>
            <Text style={styles.body} numberOfLines={1} ellipsizeMode="tail">
                {item.body}
            </Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{flex:1, backgroundColor : COLORS.primary, }}>
            <Text style={{fontSize: responsive * 0.05, fontWeight: 'bold', color: '#fff',padding: responsive * 0.03}}>Posts</Text>
            <List
                data={posts}
                loading={loading}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

export default Posts;

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
