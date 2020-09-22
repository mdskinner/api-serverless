import { assert } from 'chai'
import superagent from 'superagent'

import { tokenValid } from '../data/accessTokens'

// import { DEV_API, SERVERLESS_API } from './__config'
import { SERVERLESS_API } from './__config'

describe('-- getOrders --', () => {
    it('API check GET', async () => {
        try {
            let result = await superagent.get(`${SERVERLESS_API}/orders`).set('authorization', `Bearer ${tokenValid}`)

            assert.equal(result.status, 200)
            assert.equal(result.type, 'application/json')
        } catch (error) {
            assert.equal(error.status, 200) // will reveal the code as an error
            assert.notExists(error, 'this would error if it ever ran')
        }
    })
})
