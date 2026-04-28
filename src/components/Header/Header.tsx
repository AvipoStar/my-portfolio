import { useTranslation } from "react-i18next";
import "../../helpers/i18n";
const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "education", href: "#education" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contacts", href: "#contacts" },
];

export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: "ru" | "en") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <header className="fixed left-1/2 top-5 z-50 w-[min(1180px,calc(100%-32px))] -translate-x-1/2 rounded-[28px] border border-white/10 bg-[#090d18]/85 px-8 py-4 text-white shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          {t("nav.fio")}
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="transition hover:text-white"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex h-8 w-12 items-center rounded-full border border-white/15 bg-white/5 px-1"
            aria-label="Toggle theme"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#253a78] text-xs">
              ✦
            </span>
          </button>

          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => changeLanguage("ru")}
              className={
                i18n.language === "ru"
                  ? "text-white"
                  : "text-white/45 transition hover:text-white"
              }
            >
              RU
            </button>

            <span className="text-white/25">|</span>

            <button
              onClick={() => changeLanguage("en")}
              className={
                i18n.language === "en"
                  ? "text-white"
                  : "text-white/45 transition hover:text-white"
              }
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};