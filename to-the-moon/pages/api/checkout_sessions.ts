const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    // const price = await stripe.prices.create({
    //   product: 'donation',
    //   unit_amount: 2,
    //   currency: 'usd',
    // });
    const donation_amount = req.body.amount
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price_data: {
              currency:'USD',
              product:'prod_NmphgS5qIxmruR',
              unit_amount:Number(donation_amount)*100
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/donation/`+donation_amount,
        cancel_url: `${req.headers.origin}/donation/canceled`,
        automatic_tax: {enabled: true},
      });
      res.redirect(303, session.url);
    } catch (err:any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}