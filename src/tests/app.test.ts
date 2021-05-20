import supertest from 'supertest'

import {User} from '@/model/user'
import { app } from '@/app'

const request = supertest(app);
describe('Routes', () => {
  test('Should give "Hello world!"', async () => {
    const bodyMsg = await (await request.get('/')).body.message

    expect(bodyMsg).toBe("Hello World!")
  })
  test('Should response an array of Users', async () => {
    const res = await request.get("/users")

    expect(res.statusCode === 200).toBe(true)
    expect(res.body.data[0].id).toBe(1)
  });
});
