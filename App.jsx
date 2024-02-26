import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Responsável por gerenciar a navegação
import { NavigationContainer } from '@react-navigation/native';

//Responsável por criar navegação pilha
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home/index';
import Contact from './src/screens/Contact/index';
import Profile from './src/screens/Profile/index';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name="Inicío" component={Home} 
    options={{
      title: "Tela Inicial",
      headerStyle: {
        backgroundColor: "#B6E2D3",
      },
      headerTintColor: "#EF7C8E",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
    }}/>
    <Stack.Screen name="Perfil" component={Profile}/>
    <Stack.Screen name="Contato" component={Contact}/>
      </Stack.Navigator>
      <StatusBar style="auto"/>
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
