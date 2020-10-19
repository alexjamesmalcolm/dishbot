import React, { useState } from "react";
import useCurrentCredentials from "hooks/useCurrentCredentials";

const CreateAccount = ({
  onSwitchToSignIn,
}: {
  onSwitchToSignIn: () => void;
}) => {
  return <div>Creating account</div>;
};
const SignIn = ({
  onSwitchToCreateAccount,
}: {
  onSwitchToCreateAccount: () => void;
}) => {
  return <div>Signing in</div>;
};

const Authenticator = ({ children }: { children: JSX.Element }) => {
  const [signInForm, setSignInForm] = useState<"sign-in" | "create-account">(
    "sign-in"
  );
  const { isSignedIn, isLoading } = useCurrentCredentials();
  if (isLoading) return <p>Checking if signed in...</p>;
  if (isSignedIn) return children;
  if (signInForm === "sign-in")
    return (
      <SignIn onSwitchToCreateAccount={() => setSignInForm("create-account")} />
    );
  return <CreateAccount onSwitchToSignIn={() => setSignInForm("sign-in")} />;
};

export default Authenticator;
