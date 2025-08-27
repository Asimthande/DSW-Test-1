import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Main Store' }} 
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={{ title: 'Product Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}