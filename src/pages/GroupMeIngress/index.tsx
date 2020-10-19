import React, { useState } from "react";
import useQuery from "hooks/useQuery";
import GroupMeGroupSelector from "components/GroupMeGroupSelector";
import { getGroupsNamespace } from "api/group-me";

const GroupMeIngress = () => {
  const params = useQuery();
  const token = params.get("access_token");
  const [group, setGroup] = useState<getGroupsNamespace.Group>();
  return (
    <>
      <p>This is your access token for GroupMe: {token}</p>
      <p>
        This will be saved to your user, so that when you sign into Dishbot you
        won't have to sign into GroupMe anymore.
      </p>
      {token && !group && (
        <GroupMeGroupSelector accessToken={token} onSelect={setGroup} />
      )}
    </>
  );
};

export default GroupMeIngress;
