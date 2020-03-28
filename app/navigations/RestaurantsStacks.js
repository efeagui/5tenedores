import { createStackNavigator } from "react-navigation-stack";
import RestaurantsScreen from "../Screens/Restaurants";

const RestaurantsScreenStacks = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: () => ({
      title: "Restaurantes"
    })
  }
});

export default RestaurantsScreenStacks;
