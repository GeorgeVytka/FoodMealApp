import { MEALS } from "../data/dummy-data";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../compnents/MealItem";
function MealsOverViewScreen({ navigation, route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
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
