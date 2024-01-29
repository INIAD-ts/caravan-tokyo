import { getHeartRate } from '@/common/fitness/googleFitService'
import { getaccessToken } from '@/service/checkAccesstoken'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const accessTokenOrError = await getaccessToken()
  if (accessTokenOrError instanceof NextResponse) {
    return accessTokenOrError
  }
  const res = NextResponse.json({ res: await getHeartRate(accessTokenOrError) })
  return res
}
