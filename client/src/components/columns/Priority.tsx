import { Badge } from "flowbite-react";

interface PriorityProps {
  priority: {
    text: string;
    sortKey: number;
  };
  color: string;
}

export const Priority = ({ priority, color }: PriorityProps) => {
  return (
    <Badge size="sm" color={color}>
      {priority.text}
    </Badge>
  );
};
