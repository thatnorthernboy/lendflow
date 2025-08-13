import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';
import Header from '@/components/Header';

export const dynamic = 'force-static';
export const revalidate = 3600;

export function generateStaticParams() {
  return [{locale: 'fr'}, {locale: 'ar'}];
}

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const localeSafe = locale || 'fr';
  try {
    const messages = (await import(`../../messages/${localeSafe}.json`)).default as any;
    const meta = messages.meta || {};
    return {
      title: meta.title || 'Help a Business',
      description: meta.description || '0% community micro-loans in Morocco',
      openGraph: {
        title: meta.title || 'Help a Business',
        description: meta.description || '0% community micro-loans in Morocco',
        type: 'website'
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title || 'Help a Business',
        description: meta.description || '0% community micro-loans in Morocco'
      }
    };
  } catch {
    return {};
  }
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: ReactNode;
  params: {locale: string};
}) {
  const localeSafe = locale || 'fr';
  let messages: any;
  try {
    messages = (await import(`../../messages/${localeSafe}.json`)).default;
  } catch {
    notFound();
  }

  setRequestLocale(localeSafe);

  return (
    <html lang={localeSafe} dir={localeSafe === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider locale={localeSafe} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>

        {/* GA4 */}
        {process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}');
                `
              }}
            />
          </>
        )}

        {/* Meta Pixel */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                fbq('track', 'PageView');`
              }}
            />
            <noscript>
              <img height="1" width="1" style={{display: 'none'}}
                   src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`} />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
