import { NextPage } from "next";
import React, { ReactNode } from "react";
import AuthHeader from "../components/AuthHeader";

interface Props {
  children: ReactNode;
}

const AuthLayout: NextPage<Props> = (props) => {
  const { children } = props;
  return (
    <main className="overflow-hidden">
      {/* <AuthHeader /> */}
      <div className="holder w-screen flex">
        <div className="img-wrapper w-1/2">
          <img
            className="w-full h-full"
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
            alt=""
          />
        </div>
        <div className="w-1/2 p-8">{children}</div>
      </div>
    </main>
  );
};

export default AuthLayout;
