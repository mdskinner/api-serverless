import { APIGatewayProxyHandler } from 'aws-lambda'
import { HttpResponse } from '../@types/responses'

export const handler: APIGatewayProxyHandler = async (event, _context): Promise<HttpResponse> => {
    return { statusCode: 403, body: JSON.stringify({ message: 'Unauthorized' }), headers: { 'Content-Type': 'application/json' } }
}
