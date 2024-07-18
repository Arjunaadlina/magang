import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/color';
import List from '../../components/List';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const responsive = Dimensions.get('window').width;

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
        setLoading(false);
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.userContainer} onPress={() => navigation.navigate('UserDetail', {item})}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.body}>{item.username}</Text>
            <Text style={styles.body}>{item.email}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.primary}}>
            <Text style={{fontSize: responsive * 0.05, fontWeight: 'bold', color: '#fff',padding: responsive * 0.03}}>Users</Text>
            <List
                data={users}
                loading={loading}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

export default Users;

const styles = StyleSheet.create({
    userContainer: {
        padding: responsive * 0.04,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.second1,
        backgroundColor: COLORS.primary,
    },
    title: {
        fontSize: responsive * 0.05,
        fontWeight: 'bold',
        color: COLORS.second2,
    },
    body: {
        fontSize: responsive * 0.04,
        color: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})