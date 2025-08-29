import fetcher from '@saas/shared/lib/fetcher';
import type { Team } from '@saas/prisma';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import type { ApiResponse } from '@saas/shared/types';

const useTeam = (slug?: string) => {
  const { query, isReady } = useRouter();

  const teamSlug = slug || (isReady ? query.slug : null);

  const { data, error, isLoading } = useSWR<ApiResponse<Team>>(
    teamSlug ? `/api/teams/${teamSlug}` : null,
    fetcher
  );

  return {
    isLoading,
    isError: error,
    team: data?.data,
  };
};

export default useTeam;
