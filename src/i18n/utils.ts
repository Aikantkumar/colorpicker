import { UI_TRANSLATIONS, LANGUAGES, DEFAULT_LANG, type SupportedLang } from './ui';

export function getLangFromUrl(url: URL): SupportedLang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in LANGUAGES) {
    return lang as SupportedLang;
  }
  return DEFAULT_LANG;
}

export function useTranslations(lang: SupportedLang) {
  return function t(key: keyof typeof UI_TRANSLATIONS['en']): string {
    const translations = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS[DEFAULT_LANG];
    return translations[key] || UI_TRANSLATIONS[DEFAULT_LANG][key] || key;
  };
}

export function getLanguagePath(lang: SupportedLang): string {
  if (lang === DEFAULT_LANG) {
    return '/';
  }
  return `/${lang}/`;
}

export function getHreflangLinks(siteUrl: string = 'https://pickcolor.online') {
  const cleanSiteUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
  
  const links = (Object.keys(LANGUAGES) as SupportedLang[]).map((lang) => {
    const href = lang === DEFAULT_LANG ? `${cleanSiteUrl}/` : `${cleanSiteUrl}/${lang}/`;
    return {
      lang,
      href,
    };
  });

  // Add x-default
  links.push({
    lang: 'x-default',
    href: `${cleanSiteUrl}/`,
  });

  return links;
}
