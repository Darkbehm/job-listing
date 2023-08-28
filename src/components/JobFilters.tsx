import { useContext } from "react";
import { FilterContext } from "../contexts/filterContext";

export const JobFilters = ({ tags }: { tags: string[] }) => {
  const { addFilter } = useContext(FilterContext);
  return (
    <div className="flex flex-row-reverse flex-wrap w-full gap-4 content-center">
      {tags.map((tag, index) => (
        <button
          key={index}
          className="py-2 px-4 text-teal-600 font-semibold bg-slate-200 h-fit rounded-md"
          onClick={() => addFilter(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
