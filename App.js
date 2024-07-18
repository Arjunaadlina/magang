import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/login/Login';
import { COLORS } from './constants/color';
import Forgot from './screens/login/Forgot';
import SignUp from './screens/login/SignUp';
import NewPass from './screens/login/NewPass';
import Dashboard from './screens/dashboard/Dashboard';
import Users from './screens/list/Users';
import UserDetail from './screens/detail/UserDetail';
import Posts from './screens/list/Posts';
import PostDetail from './screens/detail/PostsDetail';
import Comments from './screens/list/Comments';
import CommentDetail from './screens/detail/CommentDetail';
import Profile from './screens/profile/Profile';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' backgroundColor={COLORS.primary}/>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="NewPass" component={NewPass} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="users" component={Users} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
        <Stack.Screen name="posts" component={Posts} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="comments" component={Comments} />
        <Stack.Screen name="CommentDetail" component={CommentDetail} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
