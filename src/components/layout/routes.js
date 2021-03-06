import { FaHome } from "react-icons/fa";
import { RiMessage2Fill, RiBuilding2Fill } from "react-icons/ri";
import { GiChaliceDrops, GiPartyPopper } from "react-icons/gi";
import { MdMilitaryTech, MdGroups } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

export const Route = [
  {
    name: "Home",
    path: "/home",
    exact: true,
    icon: <FaHome />,
  },
  {
    name: "Message",
    path: "/",
    exact: true,
    icon: <RiMessage2Fill />,
  },
];

export const Route2 = [
  {
    name: "Ranking",
    path: "/",
    exact: true,
    icon: <RiBuilding2Fill />,
  },
  {
    name: "Challenge",
    path: "/",
    exact: true,
    icon: <GiChaliceDrops />,
  },
  {
    name: "Party",
    path: "/",
    exact: true,
    icon: <GiPartyPopper />,
  },
  {
    name: "Connect",
    path: "/",
    exact: true,
    icon: <AiOutlineAppstoreAdd />,
  },
  {
    name: "Parade",
    path: "/",
    exact: true,
    icon: <MdMilitaryTech />,
  },
  {
    name: "Group",
    path: "/",
    exact: true,
    icon: <MdGroups />,
  },
];
