import { RiUserSettingsFill, RiTodoFill } from "react-icons/ri";
import { MdPublic } from "react-icons/md";

export const links = [
  {
    title: "Pages",
    links: [
      {
        path: "",
        name: "posts",
        icon: <MdPublic />,
      },
    ],
  },

  {
    title: "Dashboard",
    links: [
      {
        path: "users",
        name: "users",
        icon: <RiUserSettingsFill />,
      },
    ],
  },

  // {
  //   title: "Apps",
  //   links: [
  //     {
  //       path: "todos",
  //       name: "todos",
  //       icon: <RiTodoFill />,
  //     },
  //   ],
  // },
];
