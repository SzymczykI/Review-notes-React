import DateFilter from "./DateFilter";
import PriorityFilter from "./PriorityFilter";
import Search from "./Search";
import TypeFilter from "./TypeFilter";

const Filter = () => {
  return (
    <div className="flex ml-4 flex-col md:flex-row items-center justify-around">
      <div>
        <Search />
      </div>
      <div>
        <TypeFilter />
      </div>
      <div>
        <PriorityFilter />
      </div>
      <div>
        <DateFilter />
      </div>
    </div>
  );
};

export default Filter;
