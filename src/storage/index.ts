import localforage from 'localforage';

// Por defecto utiliza IndexedDB, si no es compatible usa WebSQL o localStorage.
localforage.config({
  name: 'React Boilerplate',
  storeName: 'collections',
  version: 1.0
});

/**
 * Almacena un objeto en el storage.
 *
 * @param key Nombre de la key para almacenar el objeto.
 * @param payload El objeto que se almacena.
 * @returns true si fue exitoso, false en otro caso.
 */
export const setItem = async (key: string, payload: Record<string, unknown>): Promise<boolean> => {
  try {
    await localforage.setItem(key, payload);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

/**
 * Recupera un objeto desde el storage.
 *
 * @param key Nombre de la key para recuperar el objeto.
 * @returns El objeto, null en otro caso.
 */
export const getItem = async (key: string): Promise<boolean | unknown> => {
  try {
    const result = await localforage.getItem(key);
    if (result) {
      return result;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Colecciones para almacenar en el storage.
 */
export const collections = {
  CACHE: {
    OPERATION_THEATERS: 'cache_operation_theater'
  }
};
