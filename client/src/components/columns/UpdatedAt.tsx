import { dateFormat } from "../../utils/helpers";

interface UpdatedAtProps {
  date: string;
}

const UpdatedAt = ({ date }: UpdatedAtProps) => {
  return <td className="py-4 px-2">{dateFormat(date)}</td>;
};

export default UpdatedAt;
