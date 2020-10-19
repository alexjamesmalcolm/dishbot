import React from "react";
import { getGroupsNamespace } from "api/group-me";

const GroupMeGroup = ({
  group,
  onSelect,
}: {
  group: getGroupsNamespace.Group;
  onSelect: () => void;
}) => (
  <div>
    <h2>{group.name}</h2>
    <img src={group.image_url} alt={`group of ${group.name}`} width="100" />
    <button onClick={onSelect}>Select</button>
  </div>
);

export default GroupMeGroup;
