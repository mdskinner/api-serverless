import { assert } from 'chai'
import superagent from 'superagent'

// import { DEV_API, SERVERLESS_API } from './__config'
import { SERVERLESS_API } from './__config'

import { tokenExpired, tokenValid } from '../data/accessTokens'

console.log(SERVERLESS_API)

describe('-- _authTest function --', () => {
    describe('check API', () => {
        it('noToken', async () => {
            try {
                // expect to fail
                let result = await superagent.get(`${SERVERLESS_API}/login`)
                // .set('authorization', null)

                assert.notExists(result, 'this would error if it ever ran')
            } catch (error) {
                assert.equal(error.status, 401)
            }
        })

        it('expiredToken', async () => {
            try {
                // expect to fail
                let result = await superagent.get(`${SERVERLESS_API}/login`).set('authorization', `Bearer ${tokenExpired}`)

                assert.notExists(result, 'this would error if it ever ran')
            } catch (error) {
                assert.equal(error.status, 401)
            }
        })

        it('validToken (unless expired)', async () => {
            try {
                // expect to pass unless token has expired - (acquire fresh token)
                let result = await superagent.get(`${SERVERLESS_API}/login`).set('authorization', `Bearer ${tokenValid}`)

                assert.equal(result.status, 200)
                assert.equal(result.type, 'application/json')
            } catch (error) {
                switch (error.status) {
                    case 400:
                        console.log('--error: Bad Request --')
                        break

                    case 401:
                        console.log('--error: Bad Token --')
                        break

                    default:
                        console.log('--error --', error)
                        break
                }

                assert.equal(error.status, 200) // will reveal the code as an error
                assert.notExists(error, 'this would error if it ever ran')
            }
        })
    })
})
