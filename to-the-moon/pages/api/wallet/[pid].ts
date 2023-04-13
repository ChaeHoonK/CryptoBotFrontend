// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { pid } = req.query
    const axios = require('axios')
    const response = await axios.get(process.env.BACKEND_HOST + 'wallet/' + pid)
    console.log(response)
    res.status(200).send(response.data)
}
