//import { IncomingMessage, ServerResponse } from 'http'

export default function handler(req,res) {
///	res.end(JSON.stringify({ text: 'Hello from Api' }))
  res.status(200).json({ text: 'Hello from Next.js' });
}