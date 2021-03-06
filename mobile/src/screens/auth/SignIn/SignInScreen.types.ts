import { StackScreenProps } from '@react-navigation/stack';
import { ParamList, Screens } from 'src/navigation';

export interface SignInScreenProps extends StackScreenProps<ParamList, Screens.SignIn> {}

export interface SignInInputsType {
  email: string;
  password: string;
}
