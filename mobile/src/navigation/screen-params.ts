export enum Screens {
  Welcome = "welcome",
  SignIn = "signIn",
  SignUp = "signUp",
  Dashboard = "dashboard",
}

export type ParamList = {
  [Screens.Welcome]: undefined;
  [Screens.SignIn]: undefined;
  [Screens.SignUp]: undefined;
  [Screens.Dashboard]: undefined;
};
