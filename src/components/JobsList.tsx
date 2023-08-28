import { useContext, useMemo } from "react";
import { JobCard } from "./JobCard";
import { FilterContext } from "../contexts/filterContext";
import { api } from "~/utils/api";

export const JobsList = () => {
  const { filters } = useContext(FilterContext);

  const { data } = api.job.getAll.useQuery();

  const datosFiltrados = useMemo(() => {
    if (!data) return [];
    if (filters.length === 0) return data;
    return data.filter((job) => {
      return filters.every((filter) => {
        return job.filters.includes(filter);
      });
    });
  }, [filters, data]);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {datosFiltrados.map((job, index) => {
        return <JobCard datos={job} key={index} />;
      })}
    </div>
  );
};
