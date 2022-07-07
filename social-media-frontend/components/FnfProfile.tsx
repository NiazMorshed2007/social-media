import { NextPage } from "next";
import React from "react";
import { ISuggestionsProfile } from "../interfaces/ISuggestionProfile";
import Avatar from "./Avatar";

interface props {
  profile: ISuggestionsProfile;
}

const FnfProfile: NextPage<props> = (props) => {
  const { profile } = props;
  return (
    <div className="w-full cursor-pointer transition-all hover:bg-gray-200/60 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar style={"w-12 h-12"} />
          <div>
            <h2 className="text-md font-semibold">{profile.name}</h2>
            <p className="text-xs text-secondary">
              @{profile.username}
              {profile.isFollowsYou && (
                <span className="ml-2 bg-gray-200/70 px-2 rounded-xl text-[10px] p-1">
                  Follows you
                </span>
              )}
            </p>
          </div>
        </div>
        <button className="p-2 px-4 text-xs bg-black text-white rounded-3xl">
          Follow
        </button>
      </div>
      <p className="pl-14 mt-1">{profile.bio}</p>
    </div>
  );
};

export default FnfProfile;
