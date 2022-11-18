import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'ns-timerecorder',
  apiKey: process.env.API_KEY || '',
})