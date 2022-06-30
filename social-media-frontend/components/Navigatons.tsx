import { NextComponentType } from "next";

const Navigatons: NextComponentType = () => {
  return (
    <aside className="w-3/12 p-2 px-6 pl-10 sticky top-0 h-full">
      <div>
        <img className="w-8 h-8" src="/twitter.png" alt="" />
      </div>
      <div className=" mt-5">
        <div className="px-1 flex flex-col gap-3">
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/home.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Home</h2>
          </div>
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/home.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Explore</h2>
          </div>
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/notif.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Notifications</h2>
          </div>
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/home.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Messages</h2>
          </div>
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/home.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Bookmarks</h2>
          </div>
          <div className="flex p-2 transition-all hover:bg-gray-200/50 rounded-2xl w-max pr-5 px-1 items-center gap-2 cursor-pointer">
            <img src="/home.png" alt="" className="w-5 h-5" />
            <h2 className="text-lg font-medium">Profile</h2>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navigatons;
