/// <reference path="../typings/modules/mysql2/index.d.ts" />

import { QueryError, RowDataPacket, FieldPacket } from 'mysql2'

declare type HttpResponse = {
    statusCode: number
    statusDescription?: string
    isBase64Encoded?: boolean
    headers: {
        'Content-Type': 'application/json'
        [key: ?string]: string
    }
    body: string
}

declare type QueryResponse = { err: QueryError; rows: RowDataPacket; fields: FieldPacket }[]

// export { QueryError, RowDataPacket, FieldPacket }
