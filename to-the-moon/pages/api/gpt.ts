// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const { Configuration, OpenAIApi } = require("openai");

async function sendToChatGPT(prompt : string) {
  const configuration = new Configuration({
    apiKey: process.env.RESTAPI,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt + ' Answer back in cute voice.',
    temperature: 0,
    max_tokens: 100,
    // top_p: 1,
    // frequency_penalty: 0.0,
    // presence_penalty: 0.0,
  });

  return (response.data.choices[0].text);
}

async function getCoinInfo(){
  const tmp = await fetch('https://data.binance.com/api/v3/ticker/24hr')
  console.log(tmp)
  return tmp
}

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const key = process.env.RESTAPI;
  if (!key) return res.status(200).json({ name: "no" });
  const result = await sendToChatGPT(req.body);

  res.status(200).json({result : result, coin : 'empty' });
}
