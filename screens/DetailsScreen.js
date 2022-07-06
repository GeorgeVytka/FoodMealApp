import { View, Text } from "react-native";

function DetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  );
}

export default DetailsScreen;
