import { Button } from "flowbite-react";
import { useContext } from "react";
import { IContextNotes } from "../../types";
import { DataContext } from "../store/GlobalState";

const TypeFilter = () => {
  

  return (
    <>
      <h1 className="text-sm">Types</h1>
      <Button.Group>
        <Button  color="gray">
          All
        </Button>
        <Button  color="gray">
          Tasks
        </Button>
        <Button  color="gray">
          Notes
        </Button>
      </Button.Group>
    </>
  );
};

export default TypeFilter;
