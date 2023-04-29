// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const body = JSON.parse(req.body)
    const axios = require('axios')
    const data = JSON.stringify({
        "start": body.start,
        "end": body.end,
        'decision_function': body.algo,
        "initial_balance":body.balance
    })

    const config = {
        method:'post',
        url:process.env.BACKEND_HOST + 'test',
        headers: { 
            'Content-Type': 'application/json'
          },
        data: data,
        maxBodyLength: Infinity
    }
    const response = await axios(config)

    res.status(200).send(response.data)
}
