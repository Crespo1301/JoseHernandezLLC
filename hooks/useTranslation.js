import { useRouter } from 'next/router';
import en from '../translations/en';
import es from '../translations/es';

const translations = { en, es };

export default function useTranslation() {
  const { locale } = useRouter();
  return translations[locale] || translations.en;
}
