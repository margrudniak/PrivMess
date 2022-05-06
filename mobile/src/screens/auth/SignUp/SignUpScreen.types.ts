import { StackScreenProps } from "@react-navigation/stack";
import { ParamList, Screens } from "src/navigation";

export interface SignUpScreenProps
  extends StackScreenProps<ParamList, Screens.SignUp> {}

export interface SignUpInputsType {
  email: string;
  password: string;
  repeatPassword: string;
}
