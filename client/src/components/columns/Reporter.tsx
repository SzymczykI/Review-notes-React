import { Avatar, Dropdown } from "flowbite-react";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";

interface ReporterProps {
  reporter: string;
}

const Reporter = ({ reporter }: ReporterProps) => {
  const { state } = useContext(DataContext);
  const { users } = state;

  const user = users.filter((a) => a.id === reporter);

  return (
    <td className="py-4 px-6">
      <Dropdown
        label={<Avatar img={user[0].photo} alt="User" rounded={true} />}
        arrowIcon={false}
        inline={true}
      >
        <Dropdown.Item> {user[0].name}</Dropdown.Item>
      </Dropdown>
    </td>
  );
};

export default Reporter;
