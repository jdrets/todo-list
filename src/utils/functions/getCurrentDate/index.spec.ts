import getCurrentDate from '.'

describe('getCurrentDate', () => {
  test('should return mock date formatted', () => {
    jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() => Date.parse('2021-07-04'))

    const formattedDate = getCurrentDate()

    expect(formattedDate).toBe('3 July')
  })
})
