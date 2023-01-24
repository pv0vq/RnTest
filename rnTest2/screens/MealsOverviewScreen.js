import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";

const MealsOverviewScreen = () => {
  return (
    <View style={styles.contaimer}>
      <Text> 화면 2입니다.</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  contaimer: {
    flex: 1,
    padding: 16,
  },
});
