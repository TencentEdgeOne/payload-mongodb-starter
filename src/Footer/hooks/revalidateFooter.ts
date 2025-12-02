import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateFooter: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    try {
      payload.logger.info(`Revalidating footer`)
      revalidateTag('global_footer')
    } catch (error) {
      payload.logger.error(`Revalidation footer failed: ${error}`)
    }
  }

  return doc
}
