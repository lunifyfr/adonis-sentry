import { SentryConfig } from '@ioc:Adonis/Addons/Sentry'
import Env from '@ioc:Adonis/Core/Env'

const sentryConfig: SentryConfig = {
  dsn: Env.get('SENTRY_DSN'),
  environment: Env.get('SENTRY_ENVIRONMENT', Env.get('NODE_ENV')),
  enabled: Env.get('SENTRY_ENABLED', false),
  ignoreErrors: ['E_ROUTE_NOT_FOUND', 'E_UNAUTHORIZED_ACCESS', 'E_INVALID_AUTH_PASSWORD', 'E_AUTHORIZATION_FAILURE'],
}
export default sentryConfig
