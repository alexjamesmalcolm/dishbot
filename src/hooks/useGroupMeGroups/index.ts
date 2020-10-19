import { useCallback, useMemo } from "react";
import { getGroups } from "api/group-me";
import useResource from "@alexjamesmalcolm/use-resource";

const useGroupMeGroups = (accessToken: string) => {
  const getResource = useCallback(
    () =>
      getGroups({ accessToken, perPage: 100 }).then((data) => data.response),
    [accessToken]
  );
  const resourceId = useMemo(
    () => `useGroupMeGroups: ${JSON.stringify({ accessToken })}`,
    [accessToken]
  );
  const { data, isLoading, error } = useResource(resourceId, { getResource });
  return useMemo(() => ({ groups: data || [], isLoading, error }), [
    data,
    error,
    isLoading,
  ]);
};

export default useGroupMeGroups;
