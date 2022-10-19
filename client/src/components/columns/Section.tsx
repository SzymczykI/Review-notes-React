import { Badge } from "flowbite-react";

interface SectionProps {
  section: string;
}

const Section = ({ section }: SectionProps) => {
  return (
    <Badge color="gray" size="sm">
      {section.replace(/(app-)/, "")}
    </Badge>
  );
};

export default Section;
