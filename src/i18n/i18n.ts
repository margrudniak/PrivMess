import * as Localization from "expo-localization";
import i18n from "i18n-js";
import en from "./en.json";
import pl from "./pl.json";

i18n.fallbacks = true;
i18n.translations = { en, pl };

i18n.locale = Localization.locale || "en";
