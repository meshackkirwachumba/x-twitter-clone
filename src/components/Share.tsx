"use client";
import { useState } from "react";
import ImageCo from "./ImageCo";
import { shareAction } from "@/actions";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };
  return (
    <form action={shareAction} className="p-4 flex gap-4">
      {/* avatar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <ImageCo
          path="general/avatar.png"
          alt="avatar"
          w={100}
          h={100}
          tr={true}
        />
      </div>
      {/* others */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="What's happening?!"
          className="bg-transparent border-none outline-none placeholder:text-textGray text-xl"
        />
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap ">
            {/* select image */}
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleImageChange}
              className="hidden"
            />
            <label htmlFor="file">
              <ImageCo
                path="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <ImageCo
              path="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageCo
              path="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageCo
              path="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageCo
              path="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageCo
              path="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
