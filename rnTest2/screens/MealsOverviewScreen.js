import { MEALS } from "../data/dummy-data";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  // const route = useRoute(); // 훅을 이용해서도 가능함 1.useRoute()을 받거나 2.props route를 받는법 2개가 있음
  console.log(route, "route");
  const catId = route.params.categoryId; // route parmas 받기 쿼리스트링대신 쓰기 좋을듯

  const displaydeMeals = MEALS.filter((mael) => {
    return mael.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.contaimer}>
      <FlatList
        data={displaydeMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
