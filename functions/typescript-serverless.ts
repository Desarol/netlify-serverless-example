import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  console.log(JSON.stringify(context, null, 2))
  console.log('context', process.env.CONTEXT)

  return {
    statusCode: 200,
    body: "🦀 Hello, Netlify from Typescript 🦀",
  }
}

export { handler }
