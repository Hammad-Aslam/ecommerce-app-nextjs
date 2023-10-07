import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skhO8IeSMXm9tZC7zgrxWeTddvALrle9FoHmrTyyvbpma6Izww9vPL6txCeyxxMF0XpwOLlBPQEFYVoXxt2wPJLRs9UMjYdfHMdqg4axp6Vbkr8t6KkvivmT6NuTVuj6JYxMXTIEEXKf0jzYcREsPb4f4XEwR7hjpnslSoOGpzzcaXaBo5kq",
})
