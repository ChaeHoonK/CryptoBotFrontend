// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Configuration, OpenAIApi } from "openai";

const MAX_RETRIES = 2;
const INITIAL_DELAY = 1000;

async function sendToChatGPT(prompt: string, retryCount = 0): Promise<string|undefined> {
  const configuration = new Configuration({
    apiKey: process.env.RESTAPI,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: prompt}],
    });

    return completion.data.choices[0].message?.content;
  } catch (error:any) {
    if (error.response && error.response.status === 429 && retryCount < MAX_RETRIES) {
      const delay = INITIAL_DELAY * 2 ** retryCount;
      await new Promise((resolve) => setTimeout(resolve, delay));
      return sendToChatGPT(prompt, retryCount + 1);
    }

    throw error;
  }
}


// async function getCoinInfo(){
//   const tmp = await fetch('https://data.binance.com/api/v3/ticker/24hr')
//   console.log(tmp)
//   return tmp
// }

// type Data = {
//   name: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const key = process.env.RESTAPI;
  if (!key) return res.status(200).json({ name: "no" });
      console.log('hi')
      const result = await sendToChatGPT(req.body);
      res.status(200).json({result : result, coin : 'empty' });
    
}
