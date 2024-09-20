const ENV_VAR = {
  ENV: import.meta.env.VITE_ENV,
  JWT_SECRET: import.meta.env.VITE_JWT_SECRET,
  MONGO_URL: import.meta.env.VITE_MONGO_URL,
  BACKEND: import.meta.env.VITE_BACKEND,
};

export default (key) => ENV_VAR[key];
