// Initializes the `metrics` service on path `/metrics`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Metrics } from './metrics.class';
import createModel from '../../models/metrics.model';
import hooks from './metrics.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'metrics': Metrics & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/metrics', new Metrics(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('metrics');

  service.hooks(hooks);
}
