import { Reviewnotes } from "../../types";

const filterHandler = (
  key: string,
  dispatch: any,
  filteredArr: Reviewnotes[]
) => {
  if (key === "All") {
    dispatch({
      type: "FILTER",
      payload: filteredArr,
    });
  }
  if (key === "Tasks") {
    const newData = filteredArr.filter((i) => i.type === "Task");
    dispatch({
      type: "FILTER",
      payload: newData,
    });
  }
  if (key === "Notes") {
    const newData = filteredArr.filter((i) => i.type === "Reviewnote");
    dispatch({
      type: "FILTER",
      payload: newData,
    });
  }
  if (key === "High") {
    const newData = filteredArr.filter((i) => i.priority.text === "High");
    dispatch({
      type: "FILTER",
      payload: newData,
    });
  }
  if (key === "Medium") {
    const newData = filteredArr.filter((i) => i.priority.text === "Medium");
    dispatch({
      type: "FILTER",
      payload: newData,
    });
  }
  if (key === "Low") {
    const newData = filteredArr.filter((i) => i.priority.text === "Low");
    dispatch({
      type: "FILTER",
      payload: newData,
    });
  }
};

const dateFormat = (date: string) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleString();
};

export {
  filterHandler,
  dateFormat,
};
