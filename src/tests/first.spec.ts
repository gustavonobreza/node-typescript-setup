import { User } from '@models/User'
import { user as mockedUser } from '@controllers/index'

test('let try', () => {
  const user = new User()
  user.name = 'Gustavo'
  console.log(user)

  console.log(mockedUser)

  expect(1).toBe(1)
  expect(user.name).toBe('Gustavo')
})
