import React, { useCallback, useState } from "react";
import useAuth from "hooks/useAuth";

const SignIn = ({
  onSwitchToCreateAccount,
}: {
  onSwitchToCreateAccount: () => void;
}) => {
  const {
    actions: { signIn },
  } = useAuth();
  const [email, setEmail] = useState("");
  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const [password, setPassword] = useState("");
  const handlePasswordChange = useCallback(
    (e) => setPassword(e.target.value),
    []
  );
  const handleSubmit = useCallback(() => {
    signIn({ email, password });
  }, [email, password, signIn]);
  return (
    <div>
      <p>Don't have an account?</p>
      <button onClick={onSwitchToCreateAccount}>Create Account</button>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleEmailChange} />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
