import { Badge } from "flowbite-react";

interface TypeProps {
  type: string;
}

const Type = ({ type }: TypeProps) => {
  return (
    <td className="type">
      <Badge color="gray" size="sm">
        {type}
      </Badge>
    </td>
  );
};

export default Type;
