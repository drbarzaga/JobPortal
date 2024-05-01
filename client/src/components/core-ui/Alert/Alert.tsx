import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FC, useState } from "react";

type Props = {
  message: string;
  type: "success" | "error" | "warning" | "info";
};

const Alert: FC<Props> = ({ message, type }) => {
  const [show, setShow] = useState(true);

  const getAlertColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50";
      case "error":
        return "bg-red-50";
      case "warning":
        return "bg-yellow-50";
      case "info":
        return "bg-blue-50";
      default:
        return "bg-red-50";
    }
  };

  const getCloserColor = () => {
    switch (type) {
      case "success":
        return "text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50";
      case "error":
        return "text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50";
      case "warning":
        return "text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50";
      case "info":
        return "text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50";
      default:
        return "text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        );
      case "error":
        return (
          <ExclamationTriangleIcon
            className="h-5 w-5 text-red-400"
            aria-hidden="true"
          />
        );
      case "warning":
        return (
          <XMarkIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        );
      case "info":
        return (
          <XMarkIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
        );
      default:
        return (
          <XMarkIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        );
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className={`rounded-md ${getAlertColor()} p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="ml-3">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={`inline-flex rounded-md ${getCloserColor()} p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50`}
              onClick={() => setShow(false)}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
