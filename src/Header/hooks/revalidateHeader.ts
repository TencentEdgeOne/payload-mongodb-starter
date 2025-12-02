import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateHeader: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    try {
      payload.logger.info(`Revalidating header`)
      revalidateTag('global_header')
    } catch (error) {
      payload.logger.error(`Revalidation header failed: ${error}`)
    }
  }

  return doc
}
