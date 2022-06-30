import { NextPage } from "next";
import React, { ReactNode } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = (props) => {
  const { children } = props;
  return (
    <main>
      <Header />
      <div className="children p-10 flex gap-5 px-[7%]">
        <div className="w-4/12">
          <div className="bg-white rounded-xl p-4">
            <h2 className="font-semibold">Activity</h2>
          </div>
        </div>
        {children}
        <div></div>
      </div>
    </main>
  );
};

export default Layout;
