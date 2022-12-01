import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./src/screens/FavouriteScreen";
import JobScreen from "./src/screens/JobScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import StackNavigation from "./src/navigation/StackNavigation";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Job"
            component={StackNavigation}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Favourite"
            component={FavouriteScreen}
            options={{ headerTintColor: "tomato" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
