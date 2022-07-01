import { NextPage } from "next";
import React, { ReactNode } from "react";
import Header from "../components/Header";
import MiddleHeader from "../components/MiddleHeader";
import Navigatons from "../components/Navigatons";
import SuggestionProfile from "../components/SuggestionProfile";
import Suggestions from "../components/Suggestions";

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = (props) => {
  const { children } = props;
  return (
    <main className="flex">
      {/* <Header /> */}
      <Navigatons />
      <div className="main w-6/12 mx-auto border-x  border-gray-300">
        {children}
      </div>
      <Suggestions />
    </main>
  );
};

export default Layout;
