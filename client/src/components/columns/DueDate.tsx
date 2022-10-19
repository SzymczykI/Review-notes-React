interface DueDateProps {
  dueDate: string;
}

const DueDate = ({ dueDate }: DueDateProps) => {
  return <td className="py-4 w-fit">{dueDate}</td>;
};

export default DueDate;
