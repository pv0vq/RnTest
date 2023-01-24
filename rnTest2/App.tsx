import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreens from "./screens/CategoryScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="카테고리" component={CategoryScreens} />
          <Stack.Screen name="다른화면1" component={MealsOverviewScreen} />
        </Stack.Navigator>
        {/* <CategoryScreens /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
