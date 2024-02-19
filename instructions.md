## Usage

```shell
node ace configure @lunifyfr/adonis-sentry
```

Add the following environment variables to your `env.ts` file:

```ts
export default Env.rules({
  //...
    
  SENTRY_DSN: Env.schema.string.optional({format: 'url'}),
  SENTRY_ENVIRONMENT: Env.schema.string.optional(),
  SENTRY_ENABLED: Env.schema.boolean.optional(),
})
```

Add the capture in `app/Exceptions/Handler.ts`
```ts
import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { SentryCapture } from '@ioc:Adonis/Addons/Sentry'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error, ctx) {
    SentryCapture(error, ctx)
    return super.handle(error, ctx)
  }
}
```
