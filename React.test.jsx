import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Calculator, numbers, operations } from './Calculator'

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render calculate', () => {
    render(<Calculator />)
  })

  it('should render a title', () => {
    render(<Calculator />)
    screen.getByText('Test')
  })

  it('should render numbers from 0 to 9', () => {
    render(<Calculator />)

    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(4)
  })

  it('should render arithmetic operations', () => {
    render(<Calculator />)

    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('should render equal sign', () => {
    render(<Calculator />)

    screen.getByText('=')
  })

  it('should render input', () => {
    render(<Calculator />)

    screen.getByRole('textbox')
  })

  it('should show user number given', () => {
    render(<Calculator />)

    const numOne = screen.getByText('1')
    fireEvent.click(numOne)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('should show user numbers given', () => {
    render(<Calculator />)

    const numOne = screen.getByText('1')
    fireEvent.click(numOne)
    const numTwo = screen.getByText('2')
    fireEvent.click(numTwo)
    const numThree = screen.getByText('3')
    fireEvent.click(numThree)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('should show user numbers and arithmetic operators', () => {
    render(<Calculator />)

    const numOne = screen.getByText('2')
    fireEvent.click(numOne)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const numTwo = screen.getByText('2')
    fireEvent.click(numTwo)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2+2')
  })

  it('should show user result after doing arithmetic operations', () => {
    render(<Calculator />)

    const numOne = screen.getByText('2')
    fireEvent.click(numOne)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const numTwo = screen.getByText('2')
    fireEvent.click(numTwo)

    const equalSign = screen.getByText('=')
    fireEvent.click(equalSign)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('4')
  })

  it('should can do operations after an operation', () => {
    render(<Calculator />)

    const numOne = screen.getByText('2')
    fireEvent.click(numOne)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const numTwo = screen.getByText('2')
    fireEvent.click(numTwo)

    const equalSign = screen.getByText('=')
    fireEvent.click(equalSign)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('4')

    fireEvent.click(plus)

    const numFour = screen.getByText('4')
    fireEvent.click(numFour)

    fireEvent.click(equalSign)

    expect(input.value).toBe('8')
  })

  it('should can delete numbers and operators', () => {
    render(<Calculator />)

    const numOne = screen.getByText('2')
    fireEvent.click(numOne)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const deleteValue = screen.getByText('<-')
    fireEvent.click(deleteValue)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })

  it('should disable equal button if the last string is an operator', () => {
    render(<Calculator />)

    const numOne = screen.getByText('2')
    fireEvent.click(numOne)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const numTwo = screen.getByText('4')
    fireEvent.click(numTwo)

    const deleteValue = screen.getByText('<-')
    fireEvent.click(deleteValue)

    const equalSign = screen.getByText('=')
    expect(equalSign.getAttribute('disabled')).toBe('')
  })
})
