import { NextComponentType } from "next";
import React from "react";

const Post: NextComponentType = () => {
  return (
    <div className="post bg-white p-4 px-2 rounded-xl">
      <div className="infos mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 rounded-full cursor-pointer overflow-hidden h-10">
            <img
              className="w-full h-full object-center object-cover"
              src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-sm font-medium">John Doe</h2>
            <p className=" text-[11px] font-semibiold text-secondary">
              30 June, 2022
            </p>
          </div>
        </div>
        <div className="pr-2">
          <img className="w-6 h-6" src="/dots.png" alt="" />
        </div>
      </div>
      <div className="content">
        <div className="post-text mb-3">
          <p className="text-sm text-right">
            اربك تكست هو اول موقع يسمح لزواره الكرام بتحويل الكتابة العربي الى
            كتابة مفهومة من قبل اغلب برامج التصميم مثل الفوتوشوب و الافترايفكتس
            و البريمير و الافد ميدا كومبوزر و السموك و برامج اخرى كثيرة اربك
            تكست هو اول موقع يسمح لزواره الكرام بتحويل الكتابة العربي الى كتابة
            مفهومة من قبل اغلب برامج التصميم مثل الفوتوشوب و الافترايفكتس و
            البريمير و الافد ميدا كومبوزر و السموك و برامج اخرى كثيرة
          </p>
        </div>
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
          alt=""
        />
      </div>
      <div className="likencmms flex items-center gap-2 px-2 py-3">
        <div className="flex p-2 cursor-pointer transition-all hover:bg-gray-100 px-4 rounded-md items-center gap-2">
          <img className="w-5 h-5" src="/love.png" alt="" />
          <p className="text-[12px] hover:underline cursor-pointer">42</p>
        </div>
        <div className="flex p-2 cursor-pointer transition-all hover:bg-gray-100 px-4 items-center gap-2">
          <img className="w-5 h-5" src="/comments.png" alt="" />

          <p className="text-[12px] hover:underline cursor-pointer">42</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
