/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_API: string;
    REACT_APP_REDUX_LOGGER_ACTIVE: string;
    REACT_APP_APPLICATION_INSIGHTS_ACTIVE: string;
    REACT_APP_APPLICATION_INSIGHTS_KEY: string;
  }
}
