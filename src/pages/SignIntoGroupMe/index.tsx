import React from "react";

const url =
  "https://oauth.groupme.com/oauth/authorize?client_id=nYOULhOHkuJcPSUjy3TtnXojCWraPk5GcI25nmkm2aShmQ2z";

const SignIntoGroupMe = () => {
  return <a href={url}>Sign into Group Me</a>;
};

export default SignIntoGroupMe;
