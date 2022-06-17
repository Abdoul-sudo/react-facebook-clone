import { RiUserSettingsFill, RiTodoFill } from "react-icons/ri";
import { MdPublic } from "react-icons/md";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "users",
        icon: <RiUserSettingsFill />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "posts",
        icon: <MdPublic />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "todos",
        icon: <RiTodoFill />,
      },
    ],
  },
];
