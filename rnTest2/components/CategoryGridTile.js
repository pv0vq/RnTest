import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Category from "../models/category";
import { useState, useEffect } from "react";

const CategoryGridTile = ({ title, color, onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.gridItme]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => {
          return [styles.button, pressed ? styles.buttonPpressed : null];
        }} // 조건부 스타일 적용 pressed 버튼 누를시 true
        android_ripple={{ color: "#cccccc" }} // 안드로이드 물결 효과
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title} </Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItme: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4, // 뒤에 그림자 생김 ios 적용안됨
    backgroundColor: "white", // 아이폰은 배경색이 지정되어야 그림자 스타일 적용됨
    shadowColor: "black", // 아이폰 그림자 적용 스타일
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPpressed: {
    opacity: 0.5, // 투명도 설정
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
