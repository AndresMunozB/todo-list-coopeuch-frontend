import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

const reactPlugin = new ReactPlugin();

const INVALID_KEY = '#invalid-key';

const applicationInsightsKey = (): string =>
  process?.env?.REACT_APP_APPLICATION_INSIGHTS_KEY &&
  process?.env?.REACT_APP_APPLICATION_INSIGHTS_KEY?.length > 0
    ? process?.env?.REACT_APP_APPLICATION_INSIGHTS_KEY
    : INVALID_KEY;

const applicationInsights = new ApplicationInsights({
  config: {
    instrumentationKey: applicationInsightsKey(),
    extensions: [reactPlugin],
    disableAjaxTracking: false,
    disableFetchTracking: false
  }
});

const isValidApplicationInsights =
  process?.env?.REACT_APP_APPLICATION_INSIGHTS_ACTIVE === 'true' &&
  applicationInsights &&
  applicationInsightsKey() !== INVALID_KEY;

const loadApplicationInsights = (): void => {
  if (isValidApplicationInsights) {
    applicationInsights.loadAppInsights();
    applicationInsights.trackPageView();
  }
};

loadApplicationInsights();

/**
 * Registra un evento en Application Insights.
 *
 * @param event El nombre del evento.
 * @param payload El objeto con los datos a registrar.
 */
export const applicationInsightsNotify = (
  event: string,
  payload: Record<string, unknown>
): void => {
  if (isValidApplicationInsights) {
    try {
      applicationInsights.trackEvent({ name: event }, payload);
    } catch (error) {
      console.error(error);
    }
  }
};

/**
 * Nombre con el que se registran los eventos en Application Insights.
 */
export const applicationInsightsEvents = {
  CRASH: 'myApp/crash',
  REPORT: 'myApp/report'
};
