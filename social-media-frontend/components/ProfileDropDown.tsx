import { Dropdown } from "antd";
import { NextPage } from "next";
import { ReactNode } from "react";
import { ISuggestionsProfile } from "../interfaces/ISuggestionProfile";
import Avatar from "./Avatar";

interface Props {
  children: ReactNode;
  profile: ISuggestionsProfile;
}

const ProfileDropDown: NextPage<Props> = (props) => {
  const { children, profile } = props;
  const { name, username, bio, followers, following } = profile;
  return (
    <Dropdown
      mouseEnterDelay={0.5}
      trigger={["hover"]}
      placement={"bottomCenter"}
      overlay={
        <>
          <div className="bg-white/80 backdrop-blur w-80 p-4 rounded-md shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <Avatar style={"w-14 h-14"} />
              </div>
              <button className="p-2 px-4 text-sm bg-black text-white rounded-3xl">
                Follow
              </button>
            </div>
            <h1 className="mt-2">{name}</h1>
            <p className="text-[13px] text-secondary">@{username}</p>
            <p className="mt-2 text-sm">{bio}</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="text-sm">
                <span className="font-semibold">{following.length} </span>
                Following
              </div>
              <div className="text-sm">
                <span className="font-semibold">{followers.length} </span>
                Followers
              </div>
            </div>
          </div>
        </>
      }
    >
      {children}
    </Dropdown>
  );
};

export default ProfileDropDown;
