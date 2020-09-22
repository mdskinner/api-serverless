import { APIGatewayProxyHandler } from 'aws-lambda'
import { HttpResponse } from '../../@types/responses'

import { mysqlConnector } from '../../helpers/mysqlConnector'

export const handler: APIGatewayProxyHandler = async (event, _context): Promise<HttpResponse> => {
    try {
        const connection = await mysqlConnector()

        console.log('Starting query ...\n', connection)

        // const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
        // let [err, rows, fields]: QueryResponse[] = await connection.promise().query('SELECT * FROM contacts')
        // let [err, rows, fields]: QueryResponse[] = await connection.promise().query('SHOW TABLES')

        // console.log('--postQuery--', err, rows, fields)

        // const promise = new Promise(function (resolve, reject) {

        // let [err, rows, fields]: [any, any, any] = await connection.promise().query('SHOW TABLES')
        let [error, rows, fields]: [any, any, any] = await connection.execute('SHOW TABLES')

        console.log('--postQuery--', error, rows, fields)

        // connection.query('SHOW TABLES', async function (error: any, rows: any, fields: any) {
        //     console.log('--postQuery--', error, rows, fields)

        //     if (error) throw new Error('ERROR ' + error)

        //     if (rows.length > 0) {
        //         let result = rows[0].email + ' ' + rows[0].firstname + ' ' + rows[0].lastname
        //         console.log(result)

        //         await connection.end(function (error: any, rows: any) {
        //             if (error) throw new Error('connection.end')

        //             // The connection is terminated now
        //             console.log('Connection ended\n')
        //         })
        //     }

        //     await connection.end(function (err: any) {
        //         if (err) throw new Error('connection.end')

        //         // The connection is terminated now
        //         console.log('Connection ended\n')
        //     })
        // })

        connection.end()

        return {
            statusCode: 200,
            body: JSON.stringify('rows'),
            headers: { 'Content-Type': 'application/json' },
        }
    } catch (error) {
        console.log('---error----', error)
        return { statusCode: 400, body: JSON.stringify('there was an error'), headers: { 'Content-Type': 'application/json' } }
    }
}
