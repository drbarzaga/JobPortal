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
            src="/assets/images/layouts/public_layout_cover.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PublicLayout;
