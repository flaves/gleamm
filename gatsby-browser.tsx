import '@fortawesome/fontawesome-svg-core/styles.css';
import { WrapPageElement } from './src/components/wrap-page-element/wrapPageElement';
import { initI18n } from './src/config/i18n';

export const wrapPageElement = WrapPageElement;

(async function () {
  await initI18n.init();
})();
