import { Avatar, Badge, Dropdown } from "flowbite-react";
import { GrLink } from "react-icons/gr";
import { useContext, useState } from "react";
import { IContextNotes } from "../../types";
import { DataContext } from "../store/GlobalState";

const Table = () => {
  const [visible, setVisible] = useState(3);

  const { state } = useContext(DataContext)

  const { data } = state 
  const notes = data
  console.log(notes)

  const loadMore = () => {
    setVisible(visible + 3);
  };

  const dateFormat = (date: string) => {
    const dateObj = new Date(date);

    return dateObj.toLocaleString();
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
    { key: "link", label: "" },
  ];

  return (
    
    <div className="flex flex-col items-center overflow-auto mx-8">
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
          {notes.slice(0, visible).map((note) => {
            return (
              <tr className="bg-white dark:bg-gray-800" key={note._id.$oid}>
                <td className="pl-4 w-4" >
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
                <td
                  
                  className="py-4 px-4 max-w-{100} font-bold  text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {note.title}
                </td>
                <td className="type">
                  <Badge color="gray" size="sm">
                    {note.type}
                  </Badge>
                </td>
                <td className="py-4 px-4 max">
                  {note.status === "Pending documentation" && (
                    <Badge size="sm" color="indigo">
                      {note.status}
                    </Badge>
                  )}
                  {note.status === "In Progress" && (
                    <Badge size="sm" color="purple">
                      {note.status}
                    </Badge>
                  )}
                  {note.status === "Closed" && (
                    <Badge size="sm" color="pink">
                      {note.status}
                    </Badge>
                  )}
                  {note.status === "Not started" && (
                    <Badge size="sm" color="gray">
                      {note.status}
                    </Badge>
                  )}
                  {note.status === "Addressed" && (
                    <Badge size="sm" color="success">
                      {note.status}
                    </Badge>
                  )}
                </td>
                <td className="py-4 px-4">
                  {note.priority.text === "Low" && (
                    <Badge size="sm" color="success">
                      Low
                    </Badge>
                  )}
                  {note.priority.text === "Medium" && (
                    <Badge size="sm" color="warning">
                      Medium
                    </Badge>
                  )}
                  {note.priority.text === "High" && (
                    <Badge size="sm" color="failure">
                      High
                    </Badge>
                  )}
                </td>
                <td className="py-4 w-fit">{note.dueDate}</td>
                <td className="py-4 px-2">
                  {note.assignees.map((i) => (
                    <Dropdown
                      label={<Avatar alt="User" rounded={true} />}
                      arrowIcon={false}
                      inline={true}
                    >
                      <Dropdown.Item>{i.$oid}</Dropdown.Item>
                    </Dropdown>
                  ))}
                </td>
                <td className="py-4 px-6">
                  <Dropdown
                    label={<Avatar alt="User" rounded={true} />}
                    arrowIcon={false}
                    inline={true}
                  >
                    <Dropdown.Item> {note.reporterId.$oid}</Dropdown.Item>
                  </Dropdown>
                </td>
                <td className="py-4 px-6">
                  {note.sectionRef && (
                    <Badge color="gray" size="sm">
                      {note.sectionRef.replace(/(app-)/, "")}
                    </Badge>
                  )}
                </td>
                <td className="py-4 px-2">
                  {dateFormat(note.createdAt.$date)}
                </td>
                <td className="py-4 px-2">
                  {dateFormat(note.updatedAt.$date)}
                </td>
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
