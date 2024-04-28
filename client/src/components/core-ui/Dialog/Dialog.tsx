import { FC, Fragment } from "react";
import { Dialog as DialogCore, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  acceptLabel?: string;
  cancelLabel?: string;
  enableClose?: boolean;
  enableAccept?: boolean;
  enableCancel?: boolean;
  renderLeftIcon?: () => React.ReactNode;
  onClose: () => void;
  onAccept?: () => void;
  onCancel?: () => void;
};

const Dialog: FC<Props> = ({
  open,
  children,
  title,
  acceptLabel = "OK",
  cancelLabel = "Cancel",
  enableClose = true,
  enableAccept = true,
  enableCancel = true,
  onClose,
  onAccept,
  onCancel,
  renderLeftIcon,
}) => {
  const handleOnClose = () => {
    onClose();
  };

  const handleOnAccept = () => {
    onAccept && onAccept();
    onClose();
  };

  const handleOnCancel = () => {
    onCancel && onCancel();
    onClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <DialogCore as="div" className="relative z-10" onClose={handleOnClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogCore.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                {enableClose && (
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                )}
                <div className="sm:flex sm:items-start">
                  {renderLeftIcon && renderLeftIcon()}
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    {title && (
                      <DialogCore.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {title}
                      </DialogCore.Title>
                    )}
                    <div className="mt-2">{children}</div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  {enableAccept && (
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                      onClick={handleOnAccept}
                    >
                      {acceptLabel}
                    </button>
                  )}
                  {enableCancel && (
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={handleOnCancel}
                    >
                      {cancelLabel}
                    </button>
                  )}
                </div>
              </DialogCore.Panel>
            </Transition.Child>
          </div>
        </div>
      </DialogCore>
    </Transition.Root>
  );
};

export default Dialog;
