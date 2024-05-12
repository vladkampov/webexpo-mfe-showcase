import { Menu, MenuProps } from "antd";
import { useState } from "react";
import "./index.css";
import logo from "./logo.png";

const items = [
  {
    label: "Home",
    key: "home",
    href: "/browse",
  },
  {
    label: "Series",
    key: "series",
    href: "/browse/genre/83",
  },
  {
    label: "Films",
    key: "dummy",
    href: "/browse/genre/34399",
  },
  {
    label: "New & Popular",
    key: "latest",
    href: "/latest",
  },
  {
    label: "My List",
    key: "my-list",
    href: "/browse/my-list",
  },
  {
    label: "Browse by Languages",
    key: "language",
    href: "/browse/original-audio",
  },
];

export default function Root(props) {
  const [current, setCurrent] = useState("home");

  return (
    <ul className="menu">
      <li key="logo" className="logo">
        <img src={logo} alt="webexpologo" />
      </li>
      {items.map((genre) => (
        <li key={genre.key}>
          <a
            href={`//netflix.com${genre.href}`}
            onClick={(e) => {
              setCurrent(genre.key);
              e.preventDefault();
            }}
            className={current === genre.key ? "active" : ""}
          >
            {genre.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
