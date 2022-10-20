import { GrLink } from "react-icons/gr";
import { useContext, useState } from "react";
import { DataContext } from "../store/GlobalState";
import Title from "./columns/Title";
import Type from "./columns/Type";
import Checkbox from "./columns/Checkbox";
import Status from "./columns/Status";
import { Priority } from "./columns/Priority";
import DueDate from "./columns/DueDate";
import Assignees from "./columns/Assignees";
import Reporter from "./columns/Reporter";
import Section from "./columns/Section";
import CreatedAt from "./columns/CreatedAt";
import UpdatedAt from "./columns/UpdatedAt";
import { headers, priorityBages, statusBadges } from "../utils/dataArrays";

const Table = () => {
  const [visible, setVisible] = useState(3);

  const { state } = useContext(DataContext);
  const { filteredData, users } = state;

  const loadMore = () => {
    setVisible(visible + 3);
  };

  return (
    <div className="flex flex-col items-center overflow-auto mt-14 mx-8">
      <table className="text-sm mx-auto px-2 text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-left text-gray-900 uppercase dark:text-gray-400">
          <tr>
            {headers.map((row) => {
              return (
                <th scope="col" className="py-3 px-4" key={row.key}>
                  {row.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(0, visible).map((note) => {
            return (
              <tr className="bg-white dark:bg-gray-800" key={note._id.$oid}>
                <Checkbox noteId={note._id.$oid} />
                <Title title={note.title} />
                <Type type={note.type} />
                <td className="py-4 px-2">
                  {statusBadges.map((type) => {
                    if (type.title === note.status)
                      return <Status status={note.status} color={type.color} />;
                    return null;
                  })}
                </td>
                <td className="py-4 px-4">
                  {priorityBages.map((type) => {
                    if (type.title === note.priority.text)
                      return (
                        <Priority priority={note.priority} color={type.color} />
                      );
                    return null;
                  })}
                </td>
                <DueDate dueDate={note.dueDate} />
                <td className="py-4 px-2">
                  {note.assignees.map((i) => {
                    const user = users.filter((a) => a.id === i.$oid);
                    return <Assignees user={user} />;
                  })}
                </td>
                <Reporter reporter={note.reporterId.$oid} />
                <td className="py-4 px-2">
                  {note.sectionRef && <Section section={note.sectionRef} />}
                </td>
                <CreatedAt date={note.createdAt.$date} />
                <UpdatedAt date={note.updatedAt.$date} />
                <td className="py-4 px-2">
                  <GrLink />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        type="button"
        className="py-2.5 px-5 w-9/12 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={loadMore}
      >
        Load more
      </button>
    </div>
  );
};

export default Table;
