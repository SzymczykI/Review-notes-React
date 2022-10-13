import { Button } from "flowbite-react";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import filterHandler from "../utils/filterHelpers";

const PriorityFilter = () => {
  const { state, dispatch } = useContext(DataContext);
  const { filteredData } = state;
  const filtered = filteredData;

  return (
    <>
      <h1 className="text-sm">Priority</h1>
      <Button.Group>
        <Button
          onClick={() => filterHandler("All", dispatch, filtered)}
          color="gray"
        >
          All
        </Button>
        <Button
          onClick={() => filterHandler("Low", dispatch, filtered)}
          color="gray"
        >
          Low
        </Button>
        <Button
          onClick={() => filterHandler("Medium", dispatch, filtered)}
          color="gray"
        >
          Medium
        </Button>
        <Button
          onClick={() => filterHandler("High", dispatch, filtered)}
          color="gray"
        >
          High
        </Button>
      </Button.Group>
    </>
  );
};

export default PriorityFilter;
