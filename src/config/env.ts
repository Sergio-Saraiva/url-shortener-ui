type enviroment = {
  apiUrl: string;
};

const LOCAL_ENV: enviroment = {
  apiUrl: "http://localhost:3001",
};

export function getEnv() {
  switch (process.env.REACT_APP_ENV) {
    case "local":
      return LOCAL_ENV;
    default:
      return LOCAL_ENV;
  }
}
