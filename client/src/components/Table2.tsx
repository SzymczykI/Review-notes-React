import { useState } from "react";
import { data } from "../../types";

interface Props {
  allNotes: data[];
}

const Table2 = ({ allNotes }: Props) => {
  const [visible, setVisible] = useState(3);

  const loadMore = () => {
    setVisible(visible + 3);
  };

  const headers = [
    { key: "check", label: "" },
    { key: "title", label: "Title" },
    { key: "type", label: "Type" },
    { key: "state", label: "State" },
    { key: "priority", label: "Priority" },
    { key: "due_date", label: "Due date" },
    { key: "Assignees", label: "Assignees" },
    { key: "Reporter", label: "Reporter" },
    { key: "Section", label: "Section" },
    { key: "Created", label: "Created" },
    { key: "Updated", label: "Updated" },
  ];

  return (
    <div className="flex flex-col w-10/12 justify-center ml-8 overflow-x-auto relative ">
      <table className="w-10/12 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            {headers.map((row) => {
              return (
                <th scope="col" className="py-3 px-6" key={row.key}>
                  {row.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {allNotes.slice(0, visible).map((note) => {
            return (
              <tr className="bg-white dark:bg-gray-800" key={note._id.$oid}>
                <td className="pl-4 w-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="py-4 pr-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {note.title}
                </th>
                <td className="type">{note.type}</td>
                <td className="py-4 px-6">{note.status}</td>
                <td className="py-4 px-6">{note.priority.text}</td>
                <td className="py-4 w-fit">{note.dueDate}</td>
                <td className="py-4 px-6">
                  {note.assignees.map((i) => i.$oid)}
                </td>
                <td className="py-4 px-6">{note.reporterId.$oid}</td>
                <td className="py-4 px-6">{note.sectionRef}</td>
                <td className="py-4 px-6">{note.createdAt.$date}</td>
                <td className="py-4 px-6">{note.updatedAt.$date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        type="button"
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={loadMore}
      >
        Load more
      </button>
    </div>
  );
};

export default Table2;
