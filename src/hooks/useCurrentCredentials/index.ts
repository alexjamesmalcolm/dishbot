import { useMemo, useCallback } from "react";
import useResource from "@alexjamesmalcolm/use-resource";
import useAuth from "hooks/useAuth";
import { ICredentials } from "@aws-amplify/core/lib-esm/types";

const resourceId = "useCurrentCredentials";

const useCurrentCredentials = () => {
  const auth = useAuth();
  const getResource = useCallback(
    () =>
      (auth.currentCredentials() as Promise<ICredentials | Error>).then(
        (data) => {
          const isSignedIn = !(data as { name: string }).name;
          return {
            credentials: isSignedIn ? (data as ICredentials) : null,
            isSignedIn,
          };
        }
      ),
    [auth]
  );
  const { data, actions, isLoading, error } = useResource(resourceId, {
    getResource,
  });
  const isSignedIn = useMemo(() => data?.isSignedIn || false, [data]);
  const credentials: ICredentials | null = useMemo(
    () => data?.credentials || null,
    [data]
  );
  return useMemo(
    () => ({ credentials, isSignedIn, isLoading, error, actions }),
    [actions, credentials, error, isLoading, isSignedIn]
  );
};

export default useCurrentCredentials;
