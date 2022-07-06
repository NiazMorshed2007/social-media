import { NextPage } from "next";
import React from "react";

interface Props {
  style?: String;
}

const Avatar: NextPage<Props> = (props) => {
  const { style } = props;
  return (
    <div
      className={`${
        style ? style : "w-9 h-8"
      } rounded-full cursor-pointer overflow-hidden`}
    >
      <img
        className="w-full h-full object-center object-cover"
        src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </div>
  );
};

export default Avatar;
