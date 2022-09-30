/* eslint-disable indent */
import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
    it('should throw an error if not number', () => {
        expect(() => fizzbuzz(NaN)).toThrow('param is not a number')
    })
    it('should return 1 if number provided is 1', () => {
        expect(fizzbuzz(1)).toBe(1)
    })
    it('should return "fizz" if number provided is 3', () => {
        expect(fizzbuzz(3)).toBe('fizz')
    })
    it('should return "fizz" if number provided is multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('fizz')
        expect(fizzbuzz(9)).toBe('fizz')
        expect(fizzbuzz(12)).toBe('fizz')
    })
    it('should return "buzz" if number provided is multiple of 5', () => {
        expect(fizzbuzz(5)).toBe('buzz')
        expect(fizzbuzz(10)).toBe('buzz')
    })
    it('should return "fizzbuzz" if number provided is multiple of 5 & 3', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    })
})
