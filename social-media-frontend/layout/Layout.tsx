import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import Navigatons from "../components/Navigatons";
import Suggestions from "../components/Suggestions";
import { getToken } from "../core/utils/utils";

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = (props) => {
  const { children } = props;
  const router = useRouter();
  const token = typeof window !== "undefined" && getToken();
  useEffect(() => {
    if (token !== "") {
    } else {
      router.push("/login");
    }
  }, [token]);

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
