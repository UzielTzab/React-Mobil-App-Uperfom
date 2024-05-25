import { StatusBar } from 'expo-status-bar';
import { Image,StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerItem,DrawerContentComponentProps, DrawerContent,createDrawerNavigator,DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el icono
import { HomeScreen } from './src/Screens/home';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import appColors from './src/Colors/Colors';
import MapScreen from './src/Screens/mapScreen';


// --------------------------------------------------Drawer------------------------------------------------
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator 
    screenOptions={{headerStyle:{backgroundColor: '#ab62c8'}, headerTintColor:'#ffffff'}}
    drawerContent={props => <UserDrawer {...props} />}
  >
      <Drawer.Screen 
          name="Perfume Store" 
          component={HomeScreen} 
          options={({ navigation }) => ({ // Añade navigation aquí
            headerLeft: () => (
              <Icon 
                name="menu-outline" 
                size={25} 
                color='#ffffff' 
                onPress={() => navigation.openDrawer()} // Utiliza navigation.openDrawer() aquí
                style={{ marginLeft: 10 }}
              />
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Icon 
                name="cart-outline" 
                size={25} 
                color='#ffffff' 
                onPress={() => { /* Aquí puedes agregar la acción que se ejecutará al presionar el icono del carrito */ }}
                style={{ marginRight: 10 }}
              />
              </TouchableOpacity>
            )
          })}
        />
        <Drawer.Screen name="Shoped" component={MapScreen}></Drawer.Screen>
        <Drawer.Screen name="Security" component={HomeScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// --------------------------------------------------Drawer stilizado------------------------------------------------

// Define un objeto que asocie cada nombre de ruta con un nombre de icono
const ICONS: { [key: string]: string } = {
  "Perfume Store": "flask",
  "Shoped": "cart",
  "Security": "shield",
};

function UserDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} >
      <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
        <Image 
          source={{ uri: 'https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ color: 'black', fontSize: 20 }}>Nombre de usuario</Text> 
        <Text style={{ color: 'black', fontSize: 15 }}>correo@ejemplo.com</Text> 
      </View>
      {props.state.routes.map((route, index) => {
        const focused = index === props.state.index;
        const { options } = props.descriptors[route.key];

        return (
          <DrawerItem
            key={route.key}
            label={route.name}
            focused={focused}
            onPress={() => props.navigation.navigate(route.name)}
            labelStyle={{ color: focused ? appColors.primary : appColors.black }}
            {...options}
            icon={({ color, size }) => (
              console.log(ICONS[route.name]),
              console.log(focused),
              <Ionicons 
                name={(focused ? ICONS[route.name] : ICONS[route.name] + '-outline') as any} 
                color={focused ? appColors.primary : appColors.black} 
                size={size} 
              />
            )}
            activeBackgroundColor={focused ? appColors.secondary : 'transparent'}
            {...options}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}