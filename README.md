
### Feature Toggles

### Local development in the context of prod environment

Try running `yarn workspace @kampov/movies start` and open `https://webexpo-mfe-showcase.vercel.app/?overrides={"bundles":{"@kampov/movies":"http://localhost:9003/kampov-movies.js"}}`

### Static Overrides

Try first with `http://localhost:9000/` and then with `http://localhost:9000/?overrides={"toggles":{"bannerFeature":true}}`

### You can mix them

Try running `yarn workspace @kampov/movies start` and open `https://webexpo-mfe-showcase.vercel.app/?overrides={"bundles":{"@kampov/movies":"http://localhost:9003/kampov-movies.js"},"toggles":{"bannerFeature":true}}`