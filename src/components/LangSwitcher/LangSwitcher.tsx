import { useTranslation } from "react-i18next";

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "ru" | "en") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
};