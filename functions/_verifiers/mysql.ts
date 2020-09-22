import { APIGatewayProxyHandler } from 'aws-lambda'
import { HttpResponse } from '../../@types/responses'

import { mysqlConnector } from '../../helpers/mysqlConnector'

export const handler: APIGatewayProxyHandler = async (event, _context): Promise<HttpResponse> => {
    try {
        const connection = await mysqlConnector()

        const query = `show tables`
        let [result] = await connection.execute(query)

        connection.end()

        return {
            statusCode: 200,
            body: JSON.stringify(result),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    } catch (error) {
        console.log('---error----', error)
        return { statusCode: 400, body: JSON.stringify('there was an error'), headers: { 'Content-Type': 'application/json' } }
    }
}
