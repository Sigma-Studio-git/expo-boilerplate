import { StackActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../constants/types";

function replace(
  navigator: StackNavigationProp<RootStackParams>,
  route: keyof RootStackParams
) {
  navigator.dispatch(StackActions.replace(route));
}

const NavigationService = { replace };

export default NavigationService;
