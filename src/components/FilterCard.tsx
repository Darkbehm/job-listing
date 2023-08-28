import { useContext } from "react";
import { FilterContext } from "../contexts/filterContext";
import Link from "next/link";

export const FilterCard = () => {
  const { filters, resetFilters } = useContext(FilterContext);

  return (
    <div className="flex w-full max-w-6xl justify-between gap-4 rounded-md  border bg-slate-50 px-12 py-6 shadow-xl">
      <div className="flex flex-1 justify-between">
        {filters.length === 0 ? null : (
          <>
            <div className="flex flex-wrap gap-4">
              {filters.map((filter, index) => (
                <FilterButton key={index} filter={filter} index={index} />
              ))}
            </div>
            <button
              className="p-2 font-semibold text-teal-600"
              onClick={resetFilters}
            >
              Clear
            </button>
          </>
        )}
      </div>
      <Link
        href={`/job/new`}
        className="max-h-12 rounded-md bg-teal-600 p-2 font-semibold text-white"
      >
        Create Job
      </Link>
    </div>
  );
};

const FilterButton = ({ filter, index }: { filter: string; index: number }) => {
  const { removeFilter } = useContext(FilterContext);
  return (
    <div key={index} className=" flex h-fit items-center justify-around">
      <div className="pointer-events-none rounded-l-md bg-slate-200 p-2 px-4 font-semibold text-teal-600">
        {filter}
      </div>
      <button
        className="rounded-r-md bg-teal-600 p-2 font-semibold text-white"
        onClick={() => removeFilter(filter)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
