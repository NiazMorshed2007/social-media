import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import MiddleHeader from "./MiddleHeader";

interface Props {
  query: String | undefined | string[];
  name: String;
  type: "followers" | "following";
}

const FnFHeader: NextPage<Props> = (props) => {
  const { query, name, type } = props;
  const router = useRouter();
  return (
    <>
      <MiddleHeader title={name} />
      <div className="header border-b border-gray-300 w-full flex">
        <div
          onClick={() => {
            router.push("/profile/" + query + "/followers");
          }}
          className="w-1/2 py-4 cursor-pointer hover:bg-gray-200/50 transition-all text-center"
        >
          <span
            className={` pb-2 ${
              type === "followers" && "border-brand border-b-2"
            } `}
          >
            Followers
          </span>
        </div>
        <div
          onClick={() => {
            router.push("/profile/" + query + "/following");
          }}
          className="w-1/2 py-4 cursor-pointer hover:bg-gray-200/50 transition-all text-center"
        >
          <span
            className={` pb-2 ${
              type === "following" && "border-brand border-b-2"
            } `}
          >
            Following
          </span>
        </div>
      </div>
    </>
  );
};

export default FnFHeader;
