import { Badge } from "flowbite-react";

interface StatusProps {
  status: string;
  color: string;
}

const Status = ({ status, color }: StatusProps) => {
  return (
    <Badge size="sm" color={color}>
      {status}
    </Badge>
  );
};

export default Status;
