import { locales } from '@/constants/locales';
import messages from '@/messages/en.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof locales)[number];
    Messages: typeof messages;
  }
}
