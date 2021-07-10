import { useEffect, useRef, MutableRefObject, EffectCallback } from 'react';

/**
 * Ejecuta una función de manera repetitiva cada cierto intervalo de tiempo.
 *
 * @param callback La función a ejecutar.
 * @param delay Tiempo en milisegundos.
 */
export const useInterval = (callback: EffectCallback, delay: number): void => {
  const savedCallback: MutableRefObject<EffectCallback | undefined> = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay && typeof delay === 'number') {
      const tick = () => savedCallback?.current?.();
      const id = setInterval(tick, delay);
      return (): void => clearInterval(id);
    }
    return;
  }, [delay]);
};
