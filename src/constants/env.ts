import Constants from "expo-constants";

const ENV = {
  dev: {},
  prod: {},
};

export function getEnv(env = Constants.manifest.releaseChannel) {
  if (__DEV__) return ENV.dev;
  else if (env === "staging") return ENV.dev;
  else if (env === "prod") return ENV.prod;
}
