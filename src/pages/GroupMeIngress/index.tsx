import React from "react";
import useQuery from "hooks/useQuery";
import useGroupMeGroups from "hooks/useGroupMeGroups";
import GroupMeGroup from "./components/GroupMeGroup";

const GroupMeIngress = () => {
  const params = useQuery();
  const token = params.get("access_token");
  const { groups, isLoading, error } = useGroupMeGroups(token || "");
  if (isLoading) return <p>Loading groups...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <p>This is your access token for GroupMe: {token}</p>
      <p>
        This will be saved to your user, so that when you sign into Dishbot you
        won't have to sign into GroupMe anymore.
      </p>
      {groups.map((group) => (
        <GroupMeGroup key={group.id} group={group} onSelect={() => {}} />
      ))}
    </>
  );
};

export default GroupMeIngress;
