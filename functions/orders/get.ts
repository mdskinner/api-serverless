import { APIGatewayProxyHandler } from 'aws-lambda'
import { HttpResponse } from '../../@types/responses'
import moment from 'moment'

// import { getUserId } from '../../helpers/decodeToken'
import { mysqlConnector } from '../../helpers/mysqlConnector'

export const handler: APIGatewayProxyHandler = async (event, _context): Promise<HttpResponse> => {
    try {
        //
        let id = event.pathParameters?.id

        // let q = event.queryStringParameters?.q || ''
        // let d1 = event.queryStringParameters?.d1 || '2020-09-15 00:00:00'
        // let d2 = event.queryStringParameters?.d2 || moment().format('YYYY-MM-DD HH:mm:ss');
        let q = event.queryStringParameters?.q
        let d1 = event.queryStringParameters?.d1
        let d2 = event.queryStringParameters?.d2

        console.log('--stage0--', id, event);
        console.log('--stage1--', q, d1, d2);

        q = ''
        d1 = '2020-09-15 00:00:00'
        d2 = moment().format('YYYY-MM-DD HH:mm:ss');

        console.log('--stage2--', q, d1, d2);

        // const userId = await getUserId(event)

        const connection = await mysqlConnector()

        let [result] = await (async () => {
            if (id) {
                const query = `SELECT o.*, u.firstName AS orderer FROM orders o INNER JOIN users u ON u.id = o.userId WHERE o.id = ?`
                return await connection.execute(query, [id])
            } else {
                const query = `SELECT o.*, u.firstName AS orderer from orders o 
                                INNER JOIN users u ON u.id = o.userId
                                WHERE o.created BETWEEN ? AND ?
                                AND o.id LIKE ?
                                ORDER BY o.created DESC`

                return await connection.execute(query, [d1, d2, `%${q}%`])
            }
        })()

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
