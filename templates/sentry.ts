import { SentryConfig } from '@ioc:Adonis/Addons/Sentry'
import Env from '@ioc:Adonis/Core/Env'

const sentryConfig: SentryConfig = {
  dsn: Env.get('SENTRY_DSN'),
  environment: Env.get('NODE_ENV'),
  enabled: Env.get('SENTRY_ENABLED', true),
}
export default sentryConfig
