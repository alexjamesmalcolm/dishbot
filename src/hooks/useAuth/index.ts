import { useMemo, useCallback } from "react";
import useResource from "@alexjamesmalcolm/use-resource";
import auth from "@aws-amplify/auth";
import { ICredentials } from "@aws-amplify/core/lib-esm/types";

const resourceId = "useAuth";

const useAuth = () => {
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
    []
  );
  const signIn = useCallback(
    ({ email, password }: { email: string; password: string }) =>
      auth.signIn(email, password).then(() => {}),
    []
  );
  const createAccount = useCallback(
    ({ email, password }: { email: string; password: string }) =>
      auth.signUp({ username: email, password }).then(() => {}),
    []
  );
  const { data, actions, isLoading, error } = useResource(resourceId, {
    getResource,
    signIn,
    createAccount,
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

export default useAuth;
