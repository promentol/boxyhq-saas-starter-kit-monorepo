import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Products() {
  return <div>Products from app1</div>;
}

export const getServerSideProps: GetServerSideProps = async ({ locale, defaultLocale }) => {
  const currentLocale = locale || defaultLocale || 'en';
  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common'])),
    },
  };
};