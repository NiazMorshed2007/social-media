import { NextComponentType } from "next";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { http } from "../core/helpers/http";
import { ISuggestionsProfile } from "../interfaces/ISuggestionProfile";
import SuggestionProfile from "./SuggestionProfile";

const Suggestions: NextComponentType = () => {
  const [users, setUsers] = useState<ISuggestionsProfile[]>([]);
  useEffect(() => {
    http
      .get("users/suggestions")
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((Err) => {
        console.log(Err);
      });
  }, []);
  return (
    <div className="w-4/12 sticky p-5 top-0 h-full">
      <header className="w-full relative">
        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          className="p-2 px-3 pl-9 outline-none placeholder:text-xs w-full rounded-3xl"
          type="text"
          placeholder="Search..."
        />
      </header>
      <div className="wrappe rounded-xl bg-gray-200/60 py-3 mt-4 flex flex-col">
        <h1 className="pl-4 mb-3 font-bold text-xl">You might like</h1>
        {users &&
          users.map((user, _) => <SuggestionProfile key={_} user={user} />)}
      </div>
    </div>
  );
};

export default Suggestions;
