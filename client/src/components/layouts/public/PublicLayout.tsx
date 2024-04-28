import usePageTitle from "@/hooks/usePageTitle";
import { FC } from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const PublicLayout: FC<Props> = ({ title, children }) => {
  usePageTitle(title);

  return (
    <>
      <div className="flex min-h-full flex-1 h-screen">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          {children}
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PublicLayout;
