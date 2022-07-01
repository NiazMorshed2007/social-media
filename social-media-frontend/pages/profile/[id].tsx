import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MiddleHeader from "../../components/MiddleHeader";
import Post from "../../components/Post";
import Layout from "../../layout/Layout";
import { getProfile } from "../../core/services/profile.service";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState<{ name: String; username: String }>();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/" + id)
      .then((res) => {
        setProfile(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MiddleHeader title={profile && profile.name} />
        <div className="wrapper relative -z-10">
          <div className="banner -z-10 absolute top-0 left-0 h-48 w-full">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="head flex items-center justify-between px-4 pt-36">
            <div className="avatar border-2 overflow-hidden w-36 h-36 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <button className="mt-4 text-sm p-2 rounded-3xl border px-4 border-slate-400">
              Edit Profile
            </button>
          </div>
          <div className="base-info border-b border-gray-300 pb-7 px-4 my-3">
            {profile && (
              <>
                <h2 className=" text-lg font-semibold">{profile.name}</h2>
                <p className="text-[13px] text-secondary">
                  @{profile.username}
                </p>
                <div className="bio py-2">
                  <p className=" text-sm">
                    14 y/o. FrontEnd Developer ( React | Javascript | Typescript
                    ). 💻 • Building in public & sharing useful resources.🙌
                  </p>
                </div>
                <div className="py-2 flex font-light items-center gap-3">
                  <div className="text-sm">
                    <span className="font-semibold">22 </span>Following
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">90 </span>Followers
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="posts-wrapper px-4">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
