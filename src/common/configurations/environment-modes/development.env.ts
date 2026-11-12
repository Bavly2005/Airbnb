import { EnvironmentInterface } from '../environment.interface';
import { defaultEnv } from './default.env';

export const developmentEnv = (): EnvironmentInterface => ({
  ...defaultEnv(),

  //  add development-specific environment, override default env
  port: 4000,
});
