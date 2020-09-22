// import { mysqlConnector } from './mysqlConnector'

// // import { v4 as uuidv4 } from 'uuid';

// export const createAccount = async (userId: string) => {
//     try {

//         // uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

//         const connection = await mysqlConnector()

//         // TODO
//         const query = `INSERT INTO users (userId, .....) VALUES (?, ?, ?);`

//         let [user] = await connection.execute(query, [userId])

//         connection.end()

//         return {
//             statusCode: 200,
//             body: JSON.stringify({ message: 'welcome', user }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         }
//     } catch (error) {
//         console.log('---error----', error)
//         return { statusCode: 400, body: JSON.stringify('there was an error'), headers: { 'Content-Type': 'application/json' } }
//     }
// }
