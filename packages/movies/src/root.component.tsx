import { movies } from "./movies";
import { useFeatureToggles } from "./featureTogglesContext";
import "./index.css";

export default function Root(props) {
  const featureToggles = useFeatureToggles();

  // eslint-disable-next-line no-console
  console.log("These are feature toggles: ", featureToggles);

  const isBannerEnabled = featureToggles.toggles["bannerFeature"];

  return (
    <section>
      {isBannerEnabled && (
        <div className="banner">
          <p>Watch now!</p>
          <img src={movies[0].imgLink} alt={movies[0].imgAlt} />
        </div>
      )}
      <ul className="movies">
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.imgLink} alt={movie.imgAlt} />
            <p className="title">{movie.name}</p>
            <p className="type">{movie.section}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
