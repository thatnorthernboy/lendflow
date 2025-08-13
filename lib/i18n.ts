import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const localeSafe = locale || 'fr';
  const messages = (await import(`../messages/${localeSafe}.json`)).default;
  return {messages, locale: localeSafe};
});
