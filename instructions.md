## Usage

```shell
node ace configure @lunifyfr/adonis-sentry
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
    SentryCapture(error)
    return super.handle(error, ctx)
  }
}
```
