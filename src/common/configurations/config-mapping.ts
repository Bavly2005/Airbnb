import { developmentEnv } from './environment-modes/development.env';
import { productionEnv } from './environment-modes/production.env';
import { stagingentEnv } from './environment-modes/staging.env';
import { EnvironmentInterface } from './environment.interface';

const environments: Record<string, () => EnvironmentInterface> = {
  development: developmentEnv,
  staging: stagingentEnv,
  production: productionEnv,
};

export default (): EnvironmentInterface => {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const getEnvToLoad = environments[nodeEnv] || developmentEnv;

  return getEnvToLoad();
};
