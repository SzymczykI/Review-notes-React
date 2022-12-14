import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { removeReporterTagHandler } from "../../utils/helpers";

const ReporterFilter = () => {
  const { state, dispatch } = useContext(DataContext);
  const { filteredData, users } = state;

  const reporters = filteredData.map((a) => a.reporterId.$oid);
  const userSet = new Set(reporters);
  const reportersArr = Array.from(userSet);

  return (
    <div>
      <h1 className="text-sm">Reporter</h1>
      <div className="flex flex-row">
        <div className="block p-1 pl-1 w-40 h-10 overflow-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {reportersArr.map((person) => {
            const user = users.filter((a) => a.id === person);
            return (
              <span
                key={person}
                id="badge-dismiss-default"
                className="inline-flex items-center mb-1 py-1 px-2 mr-1 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800"
              >
                {user[0].name}
                <button
                  type="button"
                  className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
                  data-dismiss-target="#badge-dismiss-default"
                  aria-label="Remove"
                  onClick={() =>
                    removeReporterTagHandler(person, filteredData, dispatch)
                  }
                >
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Remove badge</span>
                </button>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReporterFilter;
