// import { assert } from 'chai'

// import superagent from 'superagent'

// import { tokenValid } from '../data/accessTokens'

// // const { DEV_API, SERVERLESS_API } = process.env
// const { SERVERLESS_API } = process.env

// describe('-- _rdsProxyTest function --', () => {
//     it('connect', async () => {
//         try {
//             let result = await superagent.get(`${SERVERLESS_API}/verify/rdsProxy`).set('authorization', `Bearer ${tokenValid}`)
//
//             assert.equal(result.status, 200)
//             assert.equal(result.type, 'application/json')
//         } catch (error) {
//             assert.equal(error.status, 200) // will reveal the code as an error
//             assert.notExists(error, 'this would error if it ever ran')
//         }
//     })
// })
