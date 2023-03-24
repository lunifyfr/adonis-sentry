import * as Sentry from '@sentry/node'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default function SentryCapture (error: any, ctx: HttpContextContract) {
  if (ctx.auth?.user) {
    Sentry.setUser(ctx.auth.user)
  }
  const req = ctx.request
  Sentry.setContext('Request body', req.body())
  Sentry.setContext('Request headers', req.headers())
  Sentry.setContext('Request route', {
    protocol: req.protocol(),
    url: req.url(true),
    method: req.method(),
    params: JSON.stringify(req.params()),
  })
  Sentry.setContext('Request client', { ip: req.ip() })
  Sentry.captureException(error)
}
