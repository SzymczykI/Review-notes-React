import { Button } from "flowbite-react";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { filterHandler } from "../../utils/helpers";

const TypeFilter = () => {
  const { state, dispatch } = useContext(DataContext);
  const { filteredData, reviewnotes } = state;

  return (
    <>
      <h1 className="text-sm">Types</h1>
      <Button.Group>
        <Button
          onClick={() => filterHandler("All", dispatch, reviewnotes)}
          color="gray"
        >
          All
        </Button>
        <Button
          onClick={() => filterHandler("Tasks", dispatch, filteredData)}
          color="gray"
        >
          Tasks
        </Button>
        <Button
          onClick={() => filterHandler("Notes", dispatch, filteredData)}
          color="gray"
        >
          Notes
        </Button>
      </Button.Group>
    </>
  );
};

export default TypeFilter;
