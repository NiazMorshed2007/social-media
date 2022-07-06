import { Dropdown } from "antd";
import Avatar from "./Avatar";
import { NextComponentType, NextPage } from "next";
import React from "react";
import { ISuggestionsProfile } from "../interfaces/ISuggestionProfile";
import { useRouter } from "next/router";

const SuggestionProfile: NextPage<ISuggestionsProfile> = (props) => {
  const { username, name, bio, followers, following } = props;
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/profile/" + username);
      }}
      className="p-3 transition-all hover:bg-gray-100 flex items-center cursor-pointer justify-between"
    >
      <div className="flex items-center gap-2">
        <Avatar style={"w-9 h-9"} />
        <div>
          <Dropdown
            mouseEnterDelay={0.5}
            trigger={["hover"]}
            placement={"bottomCenter"}
            overlay={
              <>
                <div className="bg-white/95 backdrop-blur w-80 p-4 rounded-md shadow-2xl">
                  <Avatar style={"w-12 h-12"} />
                  <h1 className="mt-2">{name}</h1>
                  <p className="text-[13px] text-secondary">@{username}</p>
                  <p className="mt-2 text-sm">{bio}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="text-sm">
                      <span className="font-semibold">{following} </span>
                      Following
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">{followers} </span>
                      Followers
                    </div>
                  </div>
                </div>
              </>
            }
          >
            <h2 className="text-sm hover:underline font-medium">{name}</h2>
          </Dropdown>
          <p className="text-[11px] text-secondary">@{username}</p>
        </div>
      </div>
      <button className="p-2 px-4 text-xs bg-black text-white rounded-3xl">
        Follow
      </button>
    </div>
  );
};

export default SuggestionProfile;
