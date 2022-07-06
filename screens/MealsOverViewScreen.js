import { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../compnents/MealItem";
function MealsOverViewScreen({ navigation, route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //
  useLayoutEffect(() => {
    //fpound the category that matches id
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  //I think max did this for readability
  function renderMealItem(itemData) {
    const item = itemData.item;
    //create object to store the info from the data file
    const mealtItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    //use spread operator
    return <MealItem {...mealtItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
