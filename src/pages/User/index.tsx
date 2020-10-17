import React from "react";
import useAuth from "hooks/useAuth";

const User = () => {
  useAuth();
  return <p>User page</p>;
};

export default User;
