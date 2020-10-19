import React, { useState } from "react";
import useCurrentCredentials from "hooks/useCurrentCredentials";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";

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
