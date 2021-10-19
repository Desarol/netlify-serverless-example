import { Handler, HandlerContext } from '@netlify/functions'

type NetlifyContext = {
  site_url: string
}

function netlifyContextFromHandlerContext(context: HandlerContext): NetlifyContext | undefined {
  try {
    return JSON.parse(
      Buffer
      .from(context.clientContext.custom.netlify, 'base64')
      .toString('utf-8')
    )
  } catch {
    return undefined
  }
}

const handler: Handler = async (event, context) => {
  const netlifyContext = netlifyContextFromHandlerContext(context)
  const functionUrl = netlifyContext?.site_url ?? 'localhost'

  return {
    statusCode: 200,
    body: `🦀 Hello, Netlify from Typescript (@${functionUrl}) 🦀`,
  }
}

export { handler }
