
import * as Sentry from '@sentry/node'
import SentryProvider from './providers/SentryProvider'
import SentryCapture from './src/SentryCapture'
export default SentryProvider
export { Sentry, SentryCapture }
