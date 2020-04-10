import { Application } from '../declarations';
import metrics from './metrics/metrics.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(metrics);
}
