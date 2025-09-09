import { useTranslations } from 'next-intl'

type MessageKeys = 
  | 'common'
  | 'home'
  | 'services' 
  | 'why'
  | 'cases'
  | 'pricing'
  | 'about'
  | 'book'
  | 'landing'

export function useT(namespace: MessageKeys) {
  return useTranslations(namespace)
}