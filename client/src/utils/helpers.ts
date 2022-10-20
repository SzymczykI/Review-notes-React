import { Reviewnotes } from "../../types";

export const filterHandler = (
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

export const dateFormat = (date: string) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleString();
};

export const removeReporterTagHandler = (
  criterium: string,
  filteredData: Reviewnotes[],
  dispatch: any
) => {
  const newData = filteredData.filter((i) => i.reporterId.$oid !== criterium);
  dispatch({
    type: "FILTER",
    payload: newData,
  });
};

export const removeSectionTagHandler = (
  criterium: string,
  filteredData: Reviewnotes[],
  dispatch: any
) => {
  const newData = filteredData.filter((i) => i.sectionRef !== criterium);
  dispatch({
    type: "FILTER",
    payload: newData,
  });
};

export const removeAssigneeTagHandler = (
  criterium: string,
  filteredData: Reviewnotes[],
  dispatch: any
) => {
  const newData = filteredData.filter((item) => {
    if (item.assignees[0]) return item.assignees[0].$oid !== criterium;
    return filteredData;
  });
  dispatch({
    type: "FILTER",
    payload: newData,
  });
};