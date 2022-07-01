import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  title: String | ReactNode;
}

const MiddleHeader: NextPage<Props> = (props) => {
  const { title } = props;
  return (
    <header className="py-3 border-b border-gray-300 px-4 flex backdrop-blur sticky top-0 w-full items-center justify-between">
      <h2 className="text-md font-semibold">{title}</h2>
    </header>
  );
};

export default MiddleHeader;
