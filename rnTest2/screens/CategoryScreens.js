import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoryScreens = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("다른화면1");
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  console.log(navigation, "navigation");

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
export default CategoryScreens;
