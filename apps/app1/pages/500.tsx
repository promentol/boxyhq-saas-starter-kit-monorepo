import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Custom500() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold">500 - Server-side error occurred</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
  const currentLocale = locale || defaultLocale || 'en';
  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common'])),
    },
  };
};


