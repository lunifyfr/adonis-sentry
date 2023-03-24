declare module '@ioc:Adonis/Addons/Sentry' {
  import type { NodeOptions } from '@sentry/node'
  export interface SentryConfig extends NodeOptions {}

  import * as Sentry from '@sentry/node'
  export default Sentry

  import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
  export function SentryCapture (error: any, ctx: HttpContextContract): void
}
