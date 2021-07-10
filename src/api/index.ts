import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

/** Controla el reintento de llamadas para el método GET. */
const RETRY_REQUEST_ACTIVE = true;
/** Tiempo en milisegundos entre reintentos del método GET. */
const RETRY_REQUEST_DELAY = 500;
/** Número de intentos para el método GET. */
const REQUEST_ATTEMPTS = 3;

/**
 * Intercepta la petición para inyectar configuraciones, como por ejemplo: headers de
 * autorización.
 */
axios.interceptors.request.use(
  (config) => {
    const interceptedConfig = config;
    // interceptedConfig.x = y;
    return interceptedConfig;
  },
  (error) => Promise.reject(error)
);

/**
 * Intercepta la respuesta de axios para preprocesarla y/o realizar
 * reintentos de comunicación para el método GET.
 * NOTA: redux-logger se gatilla antes que el log de navegador, ya que la prioridad la tiene
 * la aplicación sobre procesos externos.
 */
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const request = error.config;
    if (RETRY_REQUEST_ACTIVE && REQUEST_ATTEMPTS > 0 && String(request.method) === 'get') {
      if (request.headers.retryRequestAttempts === undefined) {
        request.headers.retryRequestAttempts = 0;
      }
      request.headers.retryRequestAttempts += 1;
      if (request.headers.retryRequestAttempts === REQUEST_ATTEMPTS) {
        return Promise.reject(error);
      }
      return new Promise((resolve) => {
        const wait = setTimeout(() => {
          clearTimeout(wait);
          resolve(axios.request(request));
        }, RETRY_REQUEST_DELAY);
      });
    }
    return Promise.reject(error);
  }
);

/**
 * Request de la librería Axios.
 */
export const request = (request: AxiosRequestConfig): AxiosPromise => axios.request(request);
