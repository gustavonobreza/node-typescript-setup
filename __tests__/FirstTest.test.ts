import { addAll } from '@/index'

describe('First test', () => {
  test('Should work normally', () => {
    expect(1).toBe(1)
  })
})

describe('Func add', () => {
  test('Should reduce [1, 2, 3] = 6', () => {
    const arr: number[] = [1, 2, 3]
    const sum = addAll(arr)
    expect(sum).toBe(6)
  })

  test('Should reduce [10, 15, 20] = 45', () => {
    const arr: number[] = [10, 15, 20]
    const sum = addAll(arr)
    expect(sum).toBe(45)
  })
})
