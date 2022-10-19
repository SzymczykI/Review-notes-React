import AssignieesFilter from "./filters/AssignieesFilter";
import DateFilter from "./filters/DateFilter";
import PriorityFilter from "./filters/PriorityFilter";
import ReporterFilter from "./filters/ReporterFilter";
import Search from "./filters/Search";
import SectionFilter from "./filters/SectionFilter";
import TypeFilter from "./filters/TypeFilter";

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
