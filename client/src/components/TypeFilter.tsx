import { Button } from "flowbite-react";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import filterHandler from "../utils/filterHelpers";

const TypeFilter = () => {
  const { state, dispatch } = useContext(DataContext);
  const { filteredData, data } = state;
  const filtered = filteredData;
  const dataArr = data;

  return (
    <>
      <h1 className="text-sm">Types</h1>
      <Button.Group>
        <Button
          onClick={() => filterHandler("All", dispatch, dataArr)}
          color="gray"
        >
          All
        </Button>
        <Button
          onClick={() => filterHandler("Tasks", dispatch, filtered)}
          color="gray"
        >
          Tasks
        </Button>
        <Button
          onClick={() => filterHandler("Notes", dispatch, filtered)}
          color="gray"
        >
          Notes
        </Button>
      </Button.Group>
    </>
  );
};

export default TypeFilter;
