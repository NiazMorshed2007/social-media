import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useAppSelector } from "../hooks/reduxhooks";

const Navigatons: NextComponentType = () => {
  const router = useRouter();
  const userProfile = useAppSelector((state) => state.userProfile);
  const navigate = (uri: string) => {
    router.push(uri);
  };
  return (
    <aside className="w-3/12 p-2 px-6 pl-14 sticky top-0 h-full">
      <div>
        <img className="w-8 h-8" src="/twitter.png" alt="" />
      </div>
      <div className=" mt-5">
        <div className="px-1 flex flex-col gap-3">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer"
          >
            <img src="/home.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Home</h2>
          </div>
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/hash.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Explore</h2>
          </div>
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/notif.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Notifications</h2>
          </div>
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/message.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Messages</h2>
          </div>
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/bookmark.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Bookmarks</h2>
          </div>
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/settings.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Settings</h2>
          </div>
          <div
            onClick={() => {
              navigate("/profile/" + userProfile.username);
            }}
            className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer"
          >
            <img src="/user.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Profile</h2>
          </div>
          <button className="p-3 text-center outline-none bg-blue-500 my-3 rounded-3xl text-white">
            Tweet
          </button>
          <div className="p-3 bg-gray-200/70 rounded-3xl flex items-center gap-2">
            <div className="w-10 rounded-full cursor-pointer overflow-hidden h-10">
              <img
                className="w-full h-full object-center object-cover"
                src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div>
              <h2 className="font-semibold">
                {userProfile && userProfile.name}
              </h2>
              <p className="text-[11px] text-secondary">
                {userProfile && userProfile.username}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navigatons;
