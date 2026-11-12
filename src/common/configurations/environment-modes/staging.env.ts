import { EnvironmentInterface } from '../environment.interface';
import { defaultEnv } from './default.env';

export const stagingentEnv = (): EnvironmentInterface => ({
  ...defaultEnv(),

  //  add staging-specific environment, override default env
  port: 6000,
});
