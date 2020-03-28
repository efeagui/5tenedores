import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../Screens/Account/MyAccount";
import LoginScreen from "../Screens/Account/Login";
import RegisterScreen from "../Screens/Account/Register";

const AccountScreenStacks = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: () => ({
      title: "Mi Cuenta"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login"
    })
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      title: "Registro"
    })
  }
});

export default AccountScreenStacks;
