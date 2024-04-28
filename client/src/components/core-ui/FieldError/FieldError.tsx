import { FC } from "react";

type Props = {
  error: string;
};

const FieldError: FC<Props> = ({ error }) => {
  return <div className="mt-1 text-sm text-red-600">{error}</div>;
};

export default FieldError;
