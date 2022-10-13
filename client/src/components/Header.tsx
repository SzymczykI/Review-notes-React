import { Button, Tooltip } from "flowbite-react";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className="my-4 mx-10 border-b-2 border-black">
      <nav className="flex flex-col" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="/engagements/2021_0001/reviewnotes"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Engagements
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <a
                href="/engagements/2021_0001/reviewnotes"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Microsoft 2021
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Review Notes
              </span>
            </div>
          </li>
        </ol>
        <div className="flex flex-row mt-20">
          <h2 className="mb-4 mr-6 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl dark:text-white">
            Review Notes
          </h2>
          <Tooltip
            content="Here will be the form to create a new review note"
            placement="left"
            trigger="click"
          >
            <Button color="light">
              New <IoMdArrowDropdown />
            </Button>
          </Tooltip>
        </div>
      </nav>
    </div>
  );
};

export default Header;
