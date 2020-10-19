import React from "react";
import { getGroupsNamespace } from "api/group-me";
import Button from "react-bootstrap/Button";

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
    <Button onClick={onSelect}>Select</Button>
  </div>
);

export default GroupMeGroup;
