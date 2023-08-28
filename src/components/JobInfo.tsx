import Image from "next/image";
import Link from "next/link";
import { type RouterOutputs } from "~/utils/api";

export const JobInfo = ({
  datos,
}: {
  datos: RouterOutputs["job"]["getAll"][number];
}) => {
  return (
    <div className="flex w-full max-w-6xl items-center space-x-4">
      <div className="relative flex h-24 w-24">
        <Image src={`${datos.logo}`} alt={datos.company} fill />
      </div>
      <div className="flex flex-col items-start justify-between">
        <div className="flex space-x-2 font-semibold">
          <div className="text-teal-600 ">{datos.company}</div>
          {datos.new && (
            <span className="rounded-full bg-teal-600 px-3 py-1 text-sm uppercase text-white">
              New
            </span>
          )}
          {datos.featured && (
            <span className="rounded-full bg-slate-900 px-3 py-1 text-sm uppercase text-white">
              Featured
            </span>
          )}
        </div>
        <Link href={`/job/${datos.id}`}>
          <div className="text-xl font-bold text-black">{datos.position}</div>
        </Link>
        <div className="space-x-4 font-medium text-slate-600">
          <span>{datos.postedAt}</span>
          <span>&bull;</span>
          <span>{datos.contract}</span>
          <span>&bull;</span>
          <span>{datos.location}</span>
        </div>
      </div>
    </div>
  );
};
