import React from "react";
import { getGroupsNamespace } from "api/group-me";
import { Image, Button } from "rebass";

const GroupMeGroup = ({
  group,
  onSelect,
}: {
  group: getGroupsNamespace.Group;
  onSelect: () => void;
}) => (
  <div>
    <h2>{group.name}</h2>
    <Image src={group.image_url} alt={`group of ${group.name}`} width="200px" />
    <Button variant="primary" onClick={onSelect}>
      Select
    </Button>
  </div>
);

export default GroupMeGroup;
