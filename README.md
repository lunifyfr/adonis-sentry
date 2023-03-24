# Adonis-Sentry

## Installation

```bash
yarn add @lunifyfr/adonis-sentry
node ace configure @lunifyfr/adonis-sentry
```

1. Set Env `SENTRY_DSN=`
2. call `Sentry.captureException` in `app/Exceptions/Handler.ts`

## Test Sentry DSN 

`node ace sentry:ping`

## Example

```ts
import Sentry from '@ioc:Adonis/Addons/Sentry'

Sentry.captureMessage('Hello World')
```

```ts
import { SentryCapture } from '@ioc:Adonis/Addons/Sentry'

SentryCapture(error, ctx)
```
