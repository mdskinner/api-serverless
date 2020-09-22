const mysql = require('mysql2/promise')

const { REGION, MYSQL_ENDPOINT, MYSQL_DATABASE_NAME, MYSQL_USERNAME, MYSQL_PASSWORD } = process.env

export const mysqlConnector = async () => {
    if (!REGION || !MYSQL_ENDPOINT || !MYSQL_DATABASE_NAME || !MYSQL_USERNAME || !MYSQL_PASSWORD) {
        throw new Error('!! env vars required !!')
    }

    return await mysql.createConnection({
        host: MYSQL_ENDPOINT,
        database: MYSQL_DATABASE_NAME,
        user: MYSQL_USERNAME,
        password: MYSQL_PASSWORD,
    })
}
