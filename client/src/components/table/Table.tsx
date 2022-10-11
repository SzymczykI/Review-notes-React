import { data } from "../../../types";
import "./table.css";

interface Props {
  allNotes: data[];
}

const Table = ({ allNotes }: Props) => {
  const headers = [
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

  const columns = [
    { Header: "", accesor: "check" },
    { Header: "Title", accesor: "title" },
    { Header: "Type", accesor: "type" },
    { Header: "Type", accesor: "type" },
  ]

  return (
    <table>
      <thead>
        <tr className="top_row">
          {headers.map((row) => {
            return <td key={row.key}>{row.label}</td>;
          })}
        </tr>
      </thead>

      <tbody>
        {allNotes.map((note) => {
          return (
            <tr key={note._id.$oid}>
              
              <td>{note.title}</td>
              <td className="type">{note.type}</td>
              <td>{note.status}</td>
              <td>{note.priority.text}</td>
              <td>{note.dueDate}</td>
              <td>{note.assignees.map((i) => i.$oid)}</td>
              <td>{note.reporterId.$oid}</td>
              <td>{note.sectionRef}</td>
              <td>{note.createdAt.$date}</td>
              <td>{note.updatedAt.$date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
