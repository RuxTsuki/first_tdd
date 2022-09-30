/* eslint-disable indent */
export const fizzbuzz = (number) => {
    if (typeof number !== 'number') throw new Error('param is not a number')
    if (Number.isNaN(number)) throw new Error('param is not a number')

    const multiplies = { 3: 'fizz', 5: 'buzz' }

    let output = ''

    Object.entries(multiplies)
        .forEach(([multi, word]) => {
            if (number % multi === 0) output += word
        })

    return output === '' ? number : output
}
