import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  title: String | ReactNode;
}

const MiddleHeader: NextPage<Props> = (props) => {
  const { title } = props;
  return (
    <header className="py-3 border-b bg-white/80 border-gray-300 px-4 flex backdrop-blur sticky top-0 w-full items-center justify-between">
      <h2 className="text-lg font-semibold">{title}</h2>
    </header>
  );
};

export default MiddleHeader;
