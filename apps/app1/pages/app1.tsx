import type { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@saas/shared/lib/auth-options';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session: JSON.stringify(session),
      token: 'something',
    },
  };
};

export default function Home({ session, token }: { session: any; token: string }) {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">App1</h1>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Session Information</h2>
            {session ? (
              <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-auto">
                {JSON.stringify(session, null, 2)}
              </pre>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No active session</p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">JWT Token</h2>
            {token ? (
              <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded">
                <p className="break-all font-mono text-sm">{token}</p>
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No JWT token found in Authorization header</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}


