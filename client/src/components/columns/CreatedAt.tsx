import { dateFormat } from '../../utils/helpers'

interface CreatedAtProps {
  date: string;
}

const CreatedAt = ({ date }: CreatedAtProps) => {
  return <td className="py-4 px-2">{dateFormat(date)}</td>;
};

export default CreatedAt;
