import { APIGatewayProxyHandler } from 'aws-lambda'
import { HttpResponse } from '../../@types/responses'

import { getUserId } from '../../helpers/decodeToken'
import { mysqlConnector } from '../../helpers/mysqlConnector'

export const handler: APIGatewayProxyHandler = async (event, _context): Promise<HttpResponse> => {
    try {
        // by the time the active thread reaches here it's already been authenticated
        // - via: httpApi.authorizers.customCognitoAuthorizer in resources/httpApi.yml
        // so now we can just decode the token from the event.header to extract the userId; rather than relying on the client to send the right uuid
        const userId = await getUserId(event)

        console.log('--userId--', userId)

        const connection = await mysqlConnector()

        const query = `SELECT * FROM users WHERE users.id = ?`
        let [user] = await connection.execute(query, [userId])

        console.log('----logging in----', user)

        if (!user) {
            // create new user with  userId
        }

        connection.end()

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'welcome', user }),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    } catch (error) {
        console.log('---error----', error)
        return { statusCode: 400, body: JSON.stringify('there was an error'), headers: { 'Content-Type': 'application/json' } }
    }
}
