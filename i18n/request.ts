import { getRequestConfig } from 'next-intl/server'
import { locales, type Locale } from './routing'
import getMessages from './getMessages'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) {
    return { messages: {} }
  }

  return {
    messages: await getMessages(locale as Locale),
  }
})


