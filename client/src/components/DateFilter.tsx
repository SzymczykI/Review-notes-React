import React from "react";

const DateFilter = () => {
  return (
    <>
      <h1 className="text-sm">Date</h1>
      <input
        type="date"
        id="date-filter"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </>
  );
};

export default DateFilter;
