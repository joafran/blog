import { ui, defaultLang } from "./ui";

export type LanguageType = keyof typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as LanguageType;
  return defaultLang;
}

export function useTranslations(lang: LanguageType) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
