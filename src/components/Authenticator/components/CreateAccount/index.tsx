import useAuth from "hooks/useAuth";
import React from "react";

const CreateAccount = ({
  onSwitchToSignIn,
}: {
  onSwitchToSignIn: () => void;
}) => {
  const {
    actions: { createAccount },
  } = useAuth();
  return (
    <div>
      Creating account
      <button onClick={onSwitchToSignIn}>Sign In</button>
    </div>
  );
};

export default CreateAccount;
