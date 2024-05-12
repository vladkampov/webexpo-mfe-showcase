import "./index.css";
import { useState } from "react";

const genres = [
  {
    label: "Comedies",
    key: "comedies",
  },
  {
    label: "Dramas",
    key: "dramas",
  },
  {
    label: "Thrillers",
    key: "thrillers",
  },
  {
    label: "Documentaries",
    key: "documentaries",
  },
  {
    label: "Children",
    key: "children",
  },
  {
    label: "Action",
    key: "action",
  },
  {
    label: "Sci-Fi",
    key: "sci-fi",
  },
  {
    label: "Horror",
    key: "horror",
  },
];

export default function Root(props) {
  const [current, setCurrent] = useState("comedies");

  return (
    <ul className="genres">
      {genres.map((genre) => (
        <li key={genre.key}>
          <a
            href={`//netflix.com/search?q=thrillers${genre.key}`}
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
