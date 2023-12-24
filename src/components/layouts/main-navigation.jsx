import React from "react";
import {
  ChatSquare,
  Search,
  ColumnsGap,
  Person,
  Wallet2,
} from "react-bootstrap-icons";

function MainNavigation() {
  return (
    <nav className="text-primary  bg-background p-4 ">
      <img src="/assets/logo.svg" className="!float-left inline-flex w-min" />

      <div className="container w-max mx-auto flex items-center  justify-center">
        <NavItem
          name="Messenger"
          icon={<ChatSquare />}
          active={true}
          coloredChars={["s"]}
        />
        <NavItem
          name="Explore"
          icon={<Search />}
          active={false}
          coloredChars={["x"]}
        />
        <NavItem
          name="Project"
          icon={<ColumnsGap />}
          active={false}
          coloredChars={["c"]}
        />
        <NavItem
          name="Profile"
          icon={<Person />}
          active={false}
          coloredChars={["f"]}
        />
        <NavItem
          name="Wallet"
          icon={<Wallet2 />}
          active={false}
          coloredChars={["w"]}
        />
      </div>
    </nav>
  );
}

function NavItem({ name, icon, active, coloredChars }) {
  const primaryColor = "text-primary";
  const secondaryColor = "text-secondary ";
  const activeStyles = active ? "active" : "";

  return (
    <div
      className={`flex flex-col font-medium items-center mx-4 cursor-pointer ${activeStyles}`}
    >
      <div className="!w-[16px] !sh-[16px] font-bold">{icon}</div>
      <span className="mt-1 text">
        {name.split("").map((char, index) => (
          <span
            key={index}
            className={`${
              (char === "W" && index === name.indexOf("W")) ||
              (char === "f" && index === name.indexOf("f")) ||
              (char === "x" && index === name.indexOf("x")) ||
              (char === "c" && index === name.indexOf("c")) ||
              (char === "s" && index === name.indexOf("s") && index === 2)
                ? secondaryColor
                : primaryColor
            }`}
          >
            {char}
          </span>
        ))}
      </span>
    </div>
  );
}

export default MainNavigation;
