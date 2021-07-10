import { useEffect } from 'react';
import moment from 'moment';
import { applicationInsightsNotify, applicationInsightsEvents } from 'applicationInsights';

const useErrorHandler = (): void => {
  useEffect(() => {
    let registered = false;
    let timestamp = new Date();
    const timestampValidWindows = 5 * 1000; // máximo un registro de error cada 5 segundos
    window.onerror = (msg, url, lineNo, columnNo, error): boolean => {
      if (!registered) {
        const currentTimestamp = new Date();
        if (moment(currentTimestamp).diff(moment(timestamp)) > timestampValidWindows) {
          applicationInsightsNotify(applicationInsightsEvents.CRASH, {
            msg,
            url,
            lineNo,
            columnNo,
            error
          });
        }
        registered = true;
        timestamp = currentTimestamp;
        return true;
      }
      registered = false;
      return true;
    };
  }, []);
};

export default useErrorHandler;
