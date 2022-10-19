import { Avatar, Dropdown } from "flowbite-react";
import { Users } from "../../../types";

interface AssigneesProps {
  user: Users[];
}

const Assignees = ({ user }: AssigneesProps) => {
  return (
    <Dropdown
      key={user[0].id}
      label={<Avatar img={user[0].photo} alt="User" rounded={true} />}
      arrowIcon={false}
      inline={true}
    >
      <Dropdown.Item>{user[0].name}</Dropdown.Item>
    </Dropdown>
  );
};

export default Assignees;
