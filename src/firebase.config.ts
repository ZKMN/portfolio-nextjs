/* eslint-disable import/no-mutable-exports */
import { Analytics, getAnalytics, isSupported } from 'firebase/analytics';
import { getApps, initializeApp } from 'firebase/app';

import { config } from './project.config';

let fbAnalytics: Analytics;

if (typeof window !== 'undefined' && !getApps().length) {
  const app = initializeApp(config.firebaseConfig);

  (async () => {
    const supported = await isSupported();

    if (supported) {
      fbAnalytics = getAnalytics(app);
    }
  })();
}

export { fbAnalytics };
