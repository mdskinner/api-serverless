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
                const query = `SELECT u.*, 
                                group_concat(DISTINCT c.name ORDER BY c.id) AS clients
                                FROM users u
                                    INNER JOIN user_clients uc
                                    ON uc.userId = u.id
                                    INNER JOIN clients c
                                    ON c.id = uc.clientId
                                    GROUP BY u.id ORDER BY u.firstName
                                    WHERE users.id = ?`
                return await connection.execute(query, [id])
            } else {
                const query = `SELECT u.*, 
                                group_concat(DISTINCT c.name ORDER BY c.id) AS clients
                                FROM users u
                                    INNER JOIN user_clients uc
                                    ON uc.userId = u.id
                                    INNER JOIN clients c
                                    ON c.id = uc.clientId
                                    GROUP BY u.id ORDER BY u.firstName`
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
