import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => {
          return pressed ? styles.buttonPpressed : null;
        }} // 조건부 스타일 적용 pressed 버튼 누를시 true IOS 물결 효과
        android_ripple={
          { color: "#ccc" } // 안드로이드 물결 효과
        }
      >
        <View>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            {/*이미지는 스타일 적용해야 나옴 */}
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>조리시간: {duration}m </Text>
            <Text style={styles.detailItem}>
              난이도: {complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              비용: {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4, //  안드로이드 그림자
    shadowColor: "black", // 아이폰 그림자 적용 스타일
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPpressed: {
    opacity: 0.5, // 투명도 설정
  },
});

export default MealItem;
