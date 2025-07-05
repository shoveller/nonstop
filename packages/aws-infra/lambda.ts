import { createRequestHandler } from '@react-router/architect'
// @ts-expect-error (no types declared for build)
import * as build from '@illuwa/web/build/server'

export const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV
})
