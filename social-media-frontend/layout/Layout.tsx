import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import Navigatons from "../components/Navigatons";
import Suggestions from "../components/Suggestions";
import { http } from "../core/helpers/http";
import { getToken } from "../core/utils/utils";
import { useAppDispatch } from "../hooks/reduxhooks";
import { setProfile } from "../redux/features/userSlice";

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = (props) => {
  const { children } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = typeof window !== "undefined" && getToken();
  useEffect(() => {
    if (token !== null) {
      http
        .get("profile/me")
        .then((res) => {
          dispatch(setProfile(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
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
