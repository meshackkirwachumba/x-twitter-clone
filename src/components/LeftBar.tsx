import Image from "next/image";
import Link from "next/link";
import ImageCo from "./ImageCo";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/*1. LOGO, MENU LIST  & BUTTON */}
      <div className="flex flex-col gap-4 items-center 2xl:items-start">
        {/* a) logo link*/}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <ImageCo path="icons/logo.svg" alt="logo" w={24} h={24} />
        </Link>
        {/* b) menu list */}
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex p-2 rounded-full hover:bg-[#181818] items-center gap-4"
            >
              <ImageCo
                path={`icons/${item.icon}`}
                alt={item.name}
                w={24}
                h={24}
              />
              <span className="hidden 2xl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* c) button */}
        <Link
          href="/"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center 2xl:hidden"
        >
          <ImageCo path="icons/post.svg" alt="new post" w={24} h={24} />
        </Link>
        <Link
          href="/"
          className="hidden 2xl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>

      {/* 2. USER */}
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <ImageCo
              path="general/avatar.png"
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="hidden 2xl:flex flex-col">
            <span className="font-bold">Kirwa Dev</span>
            <span className="text-sm text-textGray">@kirwadev.io</span>
          </div>
        </div>
        <div className="hidden 2xl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
