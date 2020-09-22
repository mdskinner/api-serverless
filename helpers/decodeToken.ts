import { APIGatewayProxyEvent } from 'aws-lambda'

import jwt_decode from 'jwt-decode'

export const decodeToken = (token: string): string => {
    return jwt_decode(token)
}

export const getUserId = (event: APIGatewayProxyEvent): Promise<string> => {
    if (!event.headers.authorization) throw new Error('noToken')

    let [, token] = event.headers.authorization.split(' ')

    let userId = decodeToken(token).sub.toString()

    if (!userId.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i))
        // something not right here 'bad uuid'
        throw new Error('bad user id')

    return Promise.resolve(userId)
}
