import fetcher from '@saas/shared/lib/fetcher';
import type { TeamMember, User } from '@saas/prisma';
import useSWR, { mutate } from 'swr';
import type { ApiResponse } from '@saas/shared/types';

export type TeamMemberWithUser = TeamMember & { user: User };

const useTeamMembers = (slug: string) => {
  const url = `/api/teams/${slug}/members`;

  const { data, error, isLoading } = useSWR<ApiResponse<TeamMemberWithUser[]>>(
    url,
    fetcher
  );

  const mutateTeamMembers = async () => {
    mutate(url);
  };

  return {
    isLoading,
    isError: error,
    members: data?.data,
    mutateTeamMembers,
  };
};

export default useTeamMembers;
