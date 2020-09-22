// import { APIGatewayProxyHandler } from 'aws-lambda'
// import { HttpResponse } from '../../@types/responses'

// import { getUserId } from '../../helpers/decodeToken'
// import { mysqlConnector } from '../../helpers/mysqlConnector'

// export const handler: APIGatewayProxyHandler = async (event, _context): Promise<HttpResponse> => {
//     try {
//         //
//         console.log('--get--', event.pathParameters)
//         console.log('--get--', event.queryStringParameters)

//         const userId = await getUserId(event)

//         const connection = await mysqlConnector()

//         const query = `SELECT * FROM users WHERE user.id = ?`
//         let [result] = await connection.execute(query, [userId])

//         connection.end()

//         return {
//             statusCode: 200,
//             body: JSON.stringify(result),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         }
//     } catch (error) {
//         console.log('---error----', error)
//         return { statusCode: 400, body: JSON.stringify('there was an error'), headers: { 'Content-Type': 'application/json' } }
//     }
// }
