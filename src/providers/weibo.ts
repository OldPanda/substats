import type { SubstatsResponse } from '@/types'
import { commonProviderHandler } from '.'

type WeiboResponse =
  | { error: 0; data: { followed_count: number } }
  | { error: Omit<number, 0>; msg: string; data: null }

export default async function weiboProvider(
  key: string,
): Promise<SubstatsResponse> {
  return commonProviderHandler<WeiboResponse>({
    providerName: 'weibo',
    fetchUrl: `https://placeholder.com/v1?user=${key}`,
    countObjPath: 'followers',
    errorMessageObjPath: 'message',
    isResponseValid: d => d.error === 0 && d.data !== null,
  })
}
