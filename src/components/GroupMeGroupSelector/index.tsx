import React from "react";
import useGroupMeGroups from "hooks/useGroupMeGroups";
import GroupMeGroup from "./GroupMeGroup";
import { getGroupsNamespace } from "api/group-me";

const GroupMeGroupSelector = ({
  accessToken,
  onSelect,
}: {
  accessToken: string;
  onSelect: (group: getGroupsNamespace.Group) => void;
}) => {
  const { groups, isLoading, error } = useGroupMeGroups(accessToken);
  if (isLoading) return <p>Loading groups...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      {groups.map((group) => (
        <GroupMeGroup
          key={group.id}
          group={group}
          onSelect={() => onSelect(group)}
        />
      ))}
    </>
  );
};

export default GroupMeGroupSelector;
