import { type RouterOutputs } from "~/utils/api";
import { JobFilters } from "./JobFilters";
import { JobInfo } from "./JobInfo";

export const JobCard = ({
  datos,
}: {
  datos: RouterOutputs["job"]["getAll"][number]
}) => {
  return (
    <div className="flex bg-slate-50 border rounded-md p-12 py-8 w-full max-w-6xl shadow-xl">
      <JobInfo
        datos={datos}
      />
      <JobFilters
        tags={datos.filters}
      />
    </div>
  );
};
