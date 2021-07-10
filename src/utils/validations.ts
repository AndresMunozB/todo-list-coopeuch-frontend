type Guard<T> = (target: T) => boolean;

/**
 * Valida si los elementos de un array corresponden al tipo de dato declarado.
 *
 * @typeParam T Genérico.
 * @param array El array a evaluar.
 * @param guard Función que valida el tipo de dato.
 * @returns Verdadero si es del tipo array y no contiene elementos, o bien si todos sus elementos
 * son del tipo de dato declarado.
 */
export const isArrayOfType = <T>(array: T[], guard: Guard<T>): boolean => {
  if (Object.prototype.toString.call(array) !== '[object Array]') {
    return false;
  }
  for (const element of array) {
    if (!guard(element)) {
      return false;
    }
  }
  return true;
};
