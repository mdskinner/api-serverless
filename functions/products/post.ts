import { APIGatewayProxyHandler } from 'aws-lambda'
import { HttpResponse } from '../../@types/responses'

import { getUserId } from '../../helpers/decodeToken'
import { mysqlConnector } from '../../helpers/mysqlConnector'

import { v4 as uuidv4 } from 'uuid';

export const handler: APIGatewayProxyHandler = async (event, _context): Promise<HttpResponse> => {
    try {
        //
        let { title, description, img } = JSON.parse(event.body || '')

        if (!title) throw new Error('missing params')

        const userId = await getUserId(event)

        const connection = await mysqlConnector()

        const query = `INSERT INTO products (id, userId, title, description, img) VALUES (?, ?, ?, ?, ?);`
        let [result] = await connection.execute(query, [uuidv4(), userId, title, description || '', img || ''])

        console.log('--query result--', result);

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
