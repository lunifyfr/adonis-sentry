/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Write by @lunify/adonis-sentry
| You have to enabled debug in config/database.ts
|
*/

import Sentry from '@ioc:Adonis/Addons/Sentry'
import Event from '@ioc:Adonis/Core/Event'

Event.on('db:query', (query) => {
  Sentry.addBreadcrumb({
    level: 'info',
    category: 'sql.query',
    message: query.sql,
    data: {
      connection: query.connection,
      bindings: query.bindings,
    },
  })
})
