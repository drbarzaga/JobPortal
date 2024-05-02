import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="-m-1.5 p-1.5">
      <span className="sr-only">JobPortal</span>
      <span className="text-2xl font-semibold text-indigo-600 flex items-center gap-x-2">
        <BriefcaseIcon className="h-8 w-8" />
        JobPortal
      </span>
    </Link>
  );
};

export default Logo;
