import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./src/screens/FavouriteScreen";
import JobScreen from "./src/screens/JobScreen";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Job" component={JobScreen} />
        <Drawer.Screen name="Favourite" component={FavouriteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
