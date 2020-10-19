import React, { useCallback, useState } from "react";
import useAuth from "hooks/useAuth";

const CreateAccount = ({
  onSwitchToSignIn,
}: {
  onSwitchToSignIn: () => void;
}) => {
  const {
    actions: { createAccount },
  } = useAuth();
  const [email, setEmail] = useState("");
  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const [password, setPassword] = useState("");
  const handlePasswordChange = useCallback(
    (e) => setPassword(e.target.value),
    []
  );
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      createAccount({ email, password });
    },
    [createAccount, email, password]
  );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Create Account</button>
        </label>
      </form>
      <button onClick={onSwitchToSignIn}>Sign In</button>
    </div>
  );
};

export default CreateAccount;
