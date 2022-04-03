import { Scope } from "i18n-js";

export interface TestProps {
  notTranslated?: boolean;
  children?: React.ReactNode;
  text: Scope;
}
