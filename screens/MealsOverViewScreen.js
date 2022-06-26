import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";
function MealsOverViewScreen({ navigation, route }) {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals - {catId}</Text>
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
