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
    console.log('req body original', req.body)
    console.log('바딩', body)

    const data = JSON.stringify({
        "user_id": body.user_id,
        "type": body.type,
        'coin_num':body.coin_num
    })

    const config = {
        method:'post',
        url:process.env.BACKEND_HOST + 'order',
        headers: { 
            'Content-Type': 'application/json'
          },
        data: data,
        maxBodyLength: Infinity
    }
    const axios = require('axios')
    const response = await axios(config)

    res.status(200).send(response.data)
}
