interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <td className="py-4 px-4 font-bold  text-gray-900 whitespace-nowrap dark:text-white">
      {title}
    </td>
  );
};

export default Title;
