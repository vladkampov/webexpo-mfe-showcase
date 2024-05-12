import React, { useContext, createContext, useState, useEffect } from "react";
import merge from "lodash.merge";
const FeatureTogglesContext = createContext(null);

type FeatureTogglesConfig = {
  toggles: Record<string, boolean>;
};

function withOverrides(config) {
  const overridesStr = new URLSearchParams(window.location.search).get(
    "overrides"
  );

  if (overridesStr) {
    const overrides = JSON.parse(overridesStr);
    return merge(config, overrides);
  }
  return config;
}

export const FeatureTogglesProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [featureTogglesConfig, setFeatureTogglesConfig] =
    useState<FeatureTogglesConfig>({
      toggles: {},
    });

  const isDev = window.location.hostname === "localhost";

  useEffect(() => {
    fetch(
      isDev
        ? "//localhost:9004/feature-toggles"
        : "//webexpo-mfe-showcase-server.vercel.app/feature-toggles"
    )
      .then((res) => res.json())
      .then((config) => setFeatureTogglesConfig(withOverrides(config)));
  }, [isDev]);

  return (
    <FeatureTogglesContext.Provider value={featureTogglesConfig}>
      {children}
    </FeatureTogglesContext.Provider>
  );
};

export const useFeatureToggles = () => useContext(FeatureTogglesContext);
