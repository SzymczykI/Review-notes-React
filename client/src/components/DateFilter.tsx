import { useContext, useState } from "react";
import { DataContext } from "../store/GlobalState";

const DateFilter = () => {
  const [dateValue, setDateValue] = useState("");
  const { state, dispatch } = useContext(DataContext);
  const { filteredData } = state;
  const filteredArr = filteredData;

  const dataFilterhandler = () => {
    const newArr = filteredArr.filter(
      (note) =>
        note.dueDate.toLocaleLowerCase().includes(dateValue) ||
        note.createdAt.$date.toLocaleLowerCase().includes(dateValue) ||
        note.updatedAt.$date.toLocaleLowerCase().includes(dateValue)
    );
    dispatch({
      type: "FILTER",
      payload: newArr,
    });
  };

  return (
    <>
      <h1 className="text-sm">Date</h1>
      <input
        type="date"
        id="date-filter"
        onChange={(e) => setDateValue(e.target.value)}
        onClick={() => dataFilterhandler()}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </>
  );
};

export default DateFilter;
