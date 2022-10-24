import { Button } from "flowbite-react";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { filterHandler } from "../../utils/helpers";

const PriorityFilter = () => {
  const { state, dispatch } = useContext(DataContext);
  const { filters } = state;

  return (
    <>
      <h1 className="text-sm">Priority</h1>
      <Button.Group>
        <Button
          onClick={() => filterHandler("All", dispatch, filters)}
          color="gray"
        >
          All
        </Button>
        <Button
          onClick={() => filterHandler("Low", dispatch, filters)}
          color="gray"
        >
          Low
        </Button>
        <Button
          onClick={() => filterHandler("Medium", dispatch, filters)}
          color="gray"
        >
          Medium
        </Button>
        <Button
          onClick={() => filterHandler("High", dispatch, filters)}
          color="gray"
        >
          High
        </Button>
      </Button.Group>
    </>
  );
};

export default PriorityFilter;
