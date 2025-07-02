import en from './locales/en.json'
import ru from './locales/ru.json'



export default defineI18nConfig(() => {
  return {
    fallbackLocale: 'ru',
    messages: {
      en,
      ru
    }
  }
})