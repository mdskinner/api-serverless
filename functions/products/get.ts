import { APIGatewayProxyHandler } from 'aws-lambda'
import { HttpResponse } from '../../@types/responses'

// import { getUserId } from '../../helpers/decodeToken'
import { mysqlConnector } from '../../helpers/mysqlConnector'

export const handler: APIGatewayProxyHandler = async (event, _context): Promise<HttpResponse> => {
    try {
        //
        let id = event.pathParameters?.id

        // const userId = await getUserId(event)

        const connection = await mysqlConnector()

        let [result] = await (async () => {
            if (id) {
                // const query = `SELECT * FROM products INNER JOIN users ON users.id = products.userId WHERE products.userId = ? AND products.id = ?`
                // return await connection.execute(query, [userId, id])
                const query = `SELECT * FROM products INNER JOIN users ON users.id = products.userId WHERE products.id = ?`
                return await connection.execute(query, [id])
            } else {
                // const query = `SELECT * FROM products INNER JOIN users ON users.id = products.userId WHERE products.userId = ?`
                // return await connection.execute(query, [userId])
                // const query = `SELECT * FROM products`
                const query = `SELECT p.*, u.firstName AS owner
                                FROM products p INNER JOIN users u ON u.id = p.userId;`
                return await connection.execute(query)
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
