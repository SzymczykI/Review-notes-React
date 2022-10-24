import { Filters, Reviewnotes } from "../../types";

export const filterHandler = (
  key: string,
  dispatch: any,
  filters: Filters[]
) => {
  if (key === "All") {
    const newFilters = [
      {
        limit: filters[0].limit,
        type: "",
        priority: "",
        sectionRef: filters[0].sectionRef,
      },
    ];
    dispatch({
      type: "FILTERS",
      payload: newFilters,
    });
  }
  if (key === "Tasks") {
    const newFilters = [
      {
        limit: filters[0].limit,
        type: "Task",
        priority: filters[0].priority,
        sectionRef: filters[0].sectionRef,
      },
    ];
    dispatch({
      type: "FILTERS",
      payload: newFilters,
    });
  }
  if (key === "Notes") {
    const newFilters = [
      {
        limit: filters[0].limit,
        type: "Reviewnote",
        priority: filters[0].priority,
        sectionRef: filters[0].sectionRef,
      },
    ];
    dispatch({
      type: "FILTERS",
      payload: newFilters,
    });
  }

  if (key === "Low" || key === "Medium" || key === "High") {
    const newFilters = [
      {
        limit: filters[0].limit,
        type: filters[0].type,
        priority: key,
        sectionRef: filters[0].sectionRef,
      },
    ];
    dispatch({
      type: "FILTERS",
      payload: newFilters,
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
