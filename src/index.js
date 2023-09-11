import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login.jsx";
import Register from "./screens/register.jsx";
import feed from "./utils/feed.jsx";
import HomeScreen from "./screens/Home.jsx";

const Stack = createNativeStackNavigator();     

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="register" component={Register} />
                <Stack.Screen name="feed" component={feed}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}