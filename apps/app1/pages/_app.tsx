import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@boxyhq/react-ui/dist/react-ui.css';
import '../styles/globals.css';
import { AccountLayout } from '@saas/shared/layout';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  const { session, ...props } = pageProps as any;

  return (
    <>
      <Head>
        <title>App1</title>
      </Head>
      <SessionProvider session={session}>
        <AccountLayout>
          <Component {...props} />
        </AccountLayout>
      </SessionProvider>
    </>
  );
}

export default appWithTranslation<never>(MyApp);


