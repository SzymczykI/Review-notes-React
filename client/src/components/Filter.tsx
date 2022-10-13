import AssignieesFilter from "./AssignieesFilter";
import DateFilter from "./DateFilter";
import PriorityFilter from "./PriorityFilter";
import ReporterFilter from "./ReporterFilter";
import Search from "./Search";
import SectionFilter from "./SectionFilter";
import TypeFilter from "./TypeFilter";

const Filter = () => {
  return (
    <div className="flex flex-wrap ml-4 md:flex-row items-center justify-evenly">
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
        <ReporterFilter />
      </div>
      <div>
        <AssignieesFilter />
      </div>
      <div>
        <SectionFilter />
      </div>
      <div>
        <DateFilter />
      </div>
    </div>
  );
};

export default Filter;
