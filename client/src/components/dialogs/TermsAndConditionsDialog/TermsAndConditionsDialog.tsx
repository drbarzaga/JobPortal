import Dialog from "@/components/core-ui/Dialog";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const TermsAndConditionsDialog: FC<Props> = ({ open, onClose }) => {
  const renderLeftIcon = () => {
    return (
      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
        <ShieldCheckIcon
          className="h-6 w-6 text-indigo-600"
          aria-hidden="true"
        />
      </div>
    );
  };

  return (
    <Dialog
      title="Terms and Conditions"
      enableCancel={false}
      {...{ open, onClose, renderLeftIcon }}
    >
      <p className="text-sm text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Dialog>
  );
};

export default TermsAndConditionsDialog;
