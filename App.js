import * as React from "react";
import HomeScreen from "./src/screens/home-screen";
import BasketScreen from "./src/screens/BasketScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./src/features/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} />
          <Stack.Screen name="Prepare" component={PreparingOrderScreen} options={{presentation:"fullScreenModal", headerShown:false}} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{presentation:"fullScreenModal", headerShown:false}} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
   </Provider> 
  );
}
