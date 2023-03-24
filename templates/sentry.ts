import { SentryConfig } from '@ioc:Adonis/Addons/Sentry'
import Env from '@ioc:Adonis/Core/Env'

const sentryConfig: SentryConfig = {
  dsn: Env.get('SENTRY_DSN'),
  environment: Env.get('SENTRY_ENVIRONMENT', Env.get('NODE_ENV')),
  enabled: Env.get('SENTRY_ENABLED', false),
}
export default sentryConfig
