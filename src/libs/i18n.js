import availableLocales from '../config/locales'
import translations from '../config/translations'

export const DEFAULT_LOCALE =
  process.env.REACT_APP_DEFAULT_LOCALE || availableLocales[0].locale

export const getBrowserLocale = () => {
  const matchingLocale = availableLocales.find(({ match }) =>
    match.test(
      typeof navigator !== 'undefined' && navigator
        ? navigator.language
        : DEFAULT_LOCALE,
    ),
  )

  return matchingLocale ? matchingLocale.locale : DEFAULT_LOCALE
}

export const getLocaleFromPathname = location => {
  const isSSR = typeof window === 'undefined'
  const pathname = location.pathname || (isSSR ? '/' : window.location.pathname)
  const locale = availableLocales.reduce(
    (acc, { locale }) => (pathname.startsWith(`/${locale}/`) ? locale : acc),
    DEFAULT_LOCALE,
  )
  return locale
}

export const findMatchingLocale = (language = undefined) => {
  const matchingLocale = availableLocales.find(({ match }) =>
    match.test(
      language
        ? language
        : typeof navigator !== 'undefined' && navigator
        ? navigator.language
        : DEFAULT_LOCALE,
    ),
  )

  return matchingLocale ? matchingLocale.locale : DEFAULT_LOCALE
}

export const canonizePath = (path = '') => {
  const canon = availableLocales.reduce((acc, next) => {
    return acc
      .replace(new RegExp(`^/${next.locale}/`), '/')
      .replace(new RegExp(`^/${next.locale}$`), '/')
  }, path)
  return canon.length > 1 ? canon.replace(/\/$/, '') : canon
}

export const setupI18n = (language = undefined) => {
  const locale = findMatchingLocale(language)

  const messages = translations[locale] || translations[DEFAULT_LOCALE]

  if (!translations[locale]) {
    console.warn(`Missing translations for locale ${locale}`)
  }

  return {
    messages,
    locale,
  }
}
