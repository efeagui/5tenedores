import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../Screens/Search";

const SearchScreenStacks = createStackNavigator({
  Restaurants: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Busca tu restaurante"
    })
  }
});

export default SearchScreenStacks;
