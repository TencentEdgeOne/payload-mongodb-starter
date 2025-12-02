import type { CollectionAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateRedirects: CollectionAfterChangeHook = ({ doc, req: { payload } }) => {
  try {
    payload.logger.info(`Revalidating redirects`)
    revalidateTag('redirects')
  } catch (error) {
    payload.logger.error(`Revalidation redirects failed: ${error}`)
  }

  return doc
}
