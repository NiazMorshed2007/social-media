import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { API_URL } from "../core/config/environment";
import { useAppSelector } from "../hooks/reduxhooks";
import { ISuggestionsProfile } from "../interfaces/ISuggestionProfile";
import Avatar from "./Avatar";
import ProfileDropDown from "./ProfileDropDown";

interface Props {
  user: ISuggestionsProfile;
}

const SuggestionProfile: NextPage<Props> = (props) => {
  const { user } = props;
  const { username, name, bio, followers, following, isFollowsYou } = user;
  const router = useRouter();
  const userProfile = useAppSelector((state) => state.userProfile);
  const follow = () => {
    const followerId: any = {
      name: userProfile.name,
      username: userProfile.username,
      bio: userProfile.bio,
      followers: userProfile.followers,
      following: userProfile.following,
    };
    axios
      .put(API_URL + "actions/follow", {
        followingId: { ...user },
        followerId: { ...followerId },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((Err) => {
        console.log(Err);
      });
  };
  return (
    <div
      onClick={() => {
        router.push("/profile/" + username);
      }}
      className="p-3 transition-all hover:bg-gray-100 flex items-center cursor-pointer justify-between"
    >
      <div className="flex items-center gap-2">
        <Avatar style={"w-12 h-12"} />
        <div>
          <ProfileDropDown
            profile={{
              username,
              name,
              bio,
              following,
              followers,
              isFollowsYou,
            }}
          >
            <h2 className="text-sm hover:underline font-medium">{name}</h2>
          </ProfileDropDown>
          <p className="text-[11px] text-secondary">@{username}</p>
        </div>
      </div>
      <button
        onClick={follow}
        className="p-2 px-4 text-xs bg-black text-white rounded-3xl"
      >
        Follow
      </button>
    </div>
  );
};

export default SuggestionProfile;
