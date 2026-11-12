import { EnvironmentInterface } from '../environment.interface';
import { defaultEnv } from './default.env';

export const productionEnv = (): EnvironmentInterface => ({
  ...defaultEnv(),

  //  add production-specific environment, override default env
  port: 5000,
});
